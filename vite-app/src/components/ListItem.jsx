import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  );
};

ListItem.propTypes = {
  note: PropTypes.any,
};

export default ListItem;
