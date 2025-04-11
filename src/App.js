import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import useTraverseTree from "./hooks/useTraverseTree";
import explorerJson from "./data/folderData";
import "./App.css";

function App() {
    const [explorerData, setExplorerData] = useState(explorerJson);
    const { insertNode, deleteNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const updatedTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(updatedTree);
    };

    const handleDeleteNode = (folderId) => {
        if (explorerData.id === folderId) {
            setExplorerData(null);
        } else {
            const updatedTree = deleteNode(explorerData, folderId);
            setExplorerData(updatedTree);
        }
    };

    return (
        <div className="App">
            <FileExplorer
                explorer={explorerData}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
            />
        </div>
    );
}

export default App;
