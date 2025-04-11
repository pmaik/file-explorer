import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import useTraverseTree from "./hooks/useTraverseTree";
import explorerJson from "./data/folderData";
import "./App.css";

function App() {
    const [explorerData, setExplorerData] = useState(explorerJson);
    console.log(explorerData);
    const { insertNode, deleteNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const updatedTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(updatedTree);
    };

    const handleDeleteNode = (folderId) => {
        deleteNode(folderId);
    };

    return (
        <div className="App">
            <FileExplorer
                explorer={explorerData}
                handleInsertNode={handleInsertNode}
            />
        </div>
    );
}

export default App;
