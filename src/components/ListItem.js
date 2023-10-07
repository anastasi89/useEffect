import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export default function List({ data, handlyClick, active }) {
  return (
    <li
      onClick={() => handlyClick(data.id)}
      className={cn("user-item", { active: active === data.id })}
    >
      {data.name}
    </li>
  );
}

List.propTypes = {
  data: PropTypes.object,
  handlyClick: PropTypes.func.isRequired,
  active: PropTypes.number,
};

List.defaultProps = {
  active: null,
};
