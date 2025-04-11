import React from "react";
import PropTypes from "prop-types";
import { FaFileAlt, FaTrash } from "react-icons/fa";

import "./styles.css";

const File = ({ explorer, handleDeleteNode }) => {
    const onDelete = () => {
        handleDeleteNode(explorer.id);
    };

    return (
        <div className="file-wrapper">
            <div className="file">
                <FaFileAlt className="file-icon" />
                <span className="file-name">{explorer?.name}</span>
            </div>

            <button onClick={onDelete} className="delete-btn">
                <FaTrash className="delete-icon" />
            </button>
        </div>
    );
};

File.propTypes = {
    explorer: PropTypes.object,
    handleDeleteNode: PropTypes.func,
};

export default File;
