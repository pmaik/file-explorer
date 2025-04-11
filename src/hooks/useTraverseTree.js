const useTraverseTree = () => {
    function dfsNode(treeNode, isUpdated, folderId, folderName, isFolder) {
        if (isUpdated.value) {
            return treeNode;
        }

        if (treeNode.id === folderId && treeNode.isFolder) {
            treeNode.items.unshift({
                id: new Date().getTime(),
                name: folderName,
                isFolder: isFolder,
                items: [],
            });

            isUpdated.value = true;
            return treeNode;
        }

        treeNode.items.forEach((item) => {
            const result = dfsNode(
                item,
                isUpdated,
                folderId,
                folderName,
                isFolder
            );
            if (isUpdated.value) return result;
        });

        return treeNode;
    }

    function insertNode(tree, folderId, folderName, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: folderName,
                isFolder: isFolder,
                items: [],
            });
            return tree;
        }

        const isUpdated = { value: false };
        dfsNode(tree, isUpdated, folderId, folderName, isFolder);

        return tree;
    }

    const deleteNode = () => {};

    return { insertNode, deleteNode };
};

export default useTraverseTree;
