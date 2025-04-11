import React from "react";
import PropTypes from "prop-types";
import Folder from "../components/Folder";
import File from "../components/File";
import "./styles.css";

const FileExplorer = ({ explorerData, updateExplorerData }) => {
    console.log("explorerData", explorerData);

    return (
        <div className="file-explorer-wrapper">
            <div className="header">
                <h1>FileExplorer</h1>
            </div>

            <div className="file-explorer">
                {explorerData.isFolder ? (
                    <Folder explorer={explorerData} />
                ) : (
                    <File name={explorerData.name} />
                )}
            </div>
        </div>
    );
};

FileExplorer.propTypes = {
    explorerData: PropTypes.object,
    updateExplorerData: PropTypes.func,
};

export default FileExplorer;
