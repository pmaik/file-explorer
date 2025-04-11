import React from "react";
import PropTypes from "prop-types";
import { FaFileAlt } from "react-icons/fa";
import "./styles.css";

const File = ({ name }) => {
    return (
        <div className="file">
            <FaFileAlt className="file-icon" />
            <span className="file-name">{name}</span>
        </div>
    );
};

File.propTypes = {
    name: PropTypes.string,
};

export default File;
