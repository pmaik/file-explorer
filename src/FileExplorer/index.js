import React from "react";
import PropTypes from "prop-types";
import Folder from "../components/Folder";
import File from "../components/File";
import "./styles.css";

const FileExplorer = ({ explorer, handleInsertNode }) => {
    return (
        <div className="file-explorer-wrapper">
            <div className="header">
                <h1>FileExplorer</h1>
            </div>

            <div className="file-explorer">
                {explorer.isFolder ? (
                    <Folder
                        explorer={explorer}
                        handleInsertNode={handleInsertNode}
                    />
                ) : (
                    <File name={explorer.name} />
                )}
            </div>
        </div>
    );
};

FileExplorer.propTypes = {
    explorer: PropTypes.object,
    handleInsertNode: PropTypes.func,
};

export default FileExplorer;
