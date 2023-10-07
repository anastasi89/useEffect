import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Details({ info }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DATA_URL}${info.id}.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const dataUser = await response.json();
        setUser(dataUser);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [info.id]);

  return (
    <>
      {loading && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      {!loading && user && (
        <div className='cardUser'>
          <div>
            <img
              className='card-avatar'
              src={`${user.avatar}?${Math.random()}`}
              alt={user.name}
            />
          </div>
          <h5>{user.name}</h5>
          <p>{`City: ${user.details.city}`}</p>
          <p>{`Company: ${user.details.company}`}</p>
          <p>{`Position: ${user.details.position}`}</p>
        </div>
      )}
    </>
  );
}

Details.propTypes = {
  info: PropTypes.object,
};
Details.defaultProps = {
  info: null,
};
