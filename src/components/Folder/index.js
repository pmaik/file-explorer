import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import File from "../File";
import { FaFolder, FaFileAlt, FaTrash } from "react-icons/fa";
import "./styles.css";

const Folder = ({ explorer, handleInsertNode, handleDeleteNode }) => {
    const [showNested, setShowNested] = useState(false);
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: null,
    });
    const inputRef = useRef(null);

    const handleFolderClick = () => {
        setShowNested((prev) => !prev);
    };

    const handleSubmit = () => {
        const folderName = inputRef.current.value.trim();
        if (folderName !== "") {
            handleInsertNode(explorer.id, folderName, showInput.isFolder);
            inputRef.current.value = "";
        }
        setShowInput({ ...showInput, isVisible: false });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleBlur = () => {
        handleSubmit();
    };

    const handleCreateClick = (e, isFolder) => {
        e.stopPropagation();
        setShowNested(true);
        setShowInput({
            isVisible: true,
            isFolder: isFolder,
        });
    };

    const handleDeleteClick = () => {
        handleDeleteNode(explorer.id);
    };

    if (!explorer.isFolder) {
        return <File explorer={explorer} handleDeleteNode={handleDeleteNode} />;
    }

    return (
        <div className="folder-wrapper">
            <div onClick={handleFolderClick} className="folder">
                <div className="folder-info">
                    <FaFolder className="folder-icon" />
                    <span className="folder-name">{explorer?.name}</span>
                </div>

                <div className="create-buttons">
                    <button onClick={(e) => handleCreateClick(e, true)}>
                        Folder +{" "}
                    </button>
                    <button onClick={(e) => handleCreateClick(e, false)}>
                        File +{" "}
                    </button>
                    <button onClick={handleDeleteClick} className="delete-btn">
                        <FaTrash className="delete-icon" />
                    </button>
                </div>
            </div>

            {showInput.isVisible && (
                <div className="input-wrapper">
                    {showInput.isFolder ? (
                        <FaFolder className="folder-icon" />
                    ) : (
                        <FaFileAlt className="file-icon" />
                    )}
                    <input
                        type="text"
                        name="create-folder-file"
                        placeholder={`Enter ${
                            showInput?.isFolder ? "folder" : "file"
                        } name`}
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        autoFocus
                    />
                </div>
            )}

            {showNested && explorer.items.length !== 0 && (
                <div className="nested-folders">
                    {explorer?.items.map((item) => (
                        <Folder
                            key={item.id}
                            explorer={item}
                            handleInsertNode={handleInsertNode}
                            handleDeleteNode={handleDeleteNode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Folder.propTypes = {
    explorer: PropTypes.object,
    handleInsertNode: PropTypes.func,
    handleDeleteNode: PropTypes.func,
};

export default Folder;
