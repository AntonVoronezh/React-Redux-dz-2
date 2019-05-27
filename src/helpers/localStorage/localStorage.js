export const setInStorage = (item, data) => JSON.stringify(localStorage.setItem(item, data));
export const getInStorage = item => JSON.parse(localStorage.getItem(item));
export const removeInStorage = item => localStorage.removeItem(item);