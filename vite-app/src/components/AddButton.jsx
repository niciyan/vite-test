import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "../assets/add.svg?react";

const AddButton = () => {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <AddIcon />
      </Link>
    </div>
  );
};

export default AddButton;
