const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}
const getStoredWishList = () => {
    const StoredWishListStr = localStorage.getItem('wish-list');
    if (StoredWishListStr) {
        const storedWishList = JSON.parse(StoredWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

export { addToStoredReadList, getStoredWishList, getStoredReadList }