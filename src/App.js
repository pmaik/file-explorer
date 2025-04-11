import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import "./App.css";
import explorerJson from "./data/folderData";

function App() {
    const [explorerData, setExplorerData] = useState(explorerJson);
    return (
        <div className="App">
            <FileExplorer
                explorerData={explorerData}
                updateExplorerData={setExplorerData}
            />
        </div>
    );
}

export default App;
