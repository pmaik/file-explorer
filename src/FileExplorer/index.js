import React from "react";
import PropTypes from "prop-types";
import Folder from "../components/Folder";
import "./styles.css";

const FileExplorer = ({ explorer, handleInsertNode, handleDeleteNode }) => {
    return (
        <div className="file-explorer-wrapper">
            <div className="header">
                <h1>FileExplorer</h1>
            </div>

            {explorer && (
                <div className="file-explorer">
                    <Folder
                        explorer={explorer}
                        handleInsertNode={handleInsertNode}
                        handleDeleteNode={handleDeleteNode}
                    />
                </div>
            )}
        </div>
    );
};

FileExplorer.propTypes = {
    explorer: PropTypes.object,
    handleInsertNode: PropTypes.func,
    handleDeleteNode: PropTypes.func,
};

export default FileExplorer;
