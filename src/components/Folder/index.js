import React, { useState } from "react";
import PropTypes from "prop-types";
import File from "../File";
import { FaFolder } from "react-icons/fa";
import "./styles.css";

const Folder = ({ explorer }) => {
    const [openNested, setOpenNested] = useState(false);

    const handleClick = () => {
        setOpenNested((prev) => !prev);
    };

    return (
        <div className="folder-wrapper">
            <div onClick={handleClick} className="folder">
                <FaFolder className="folder-icon" />
                <span className="folder-name">{explorer?.name}</span>
            </div>

            {openNested && (
                <div className="nested-folders">
                    {explorer?.items.map((item) =>
                        item?.isFolder ? (
                            <Folder key={item.id} explorer={item} />
                        ) : (
                            <File key={item.id} name={item.name} />
                        )
                    )}
                </div>
            )}
        </div>
    );
};

Folder.propTypes = {
    explorer: PropTypes.object,
};

export default Folder;
