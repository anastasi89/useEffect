import { React } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

export default function List({ dataList, handlyClick, active }) {
  return (
    <ul className='list-user'>
      {dataList.map((item) => {
        return (
          <ListItem
            key={item.id}
            data={item}
            handlyClick={handlyClick}
            active={active}
          />
        );
      })}
    </ul>
  );
}

List.propTypes = {
  info: PropTypes.object,
  handlyClick: PropTypes.func.isRequired,
  active: PropTypes.number,
};

List.defaultProps = {
  active: null,
};
