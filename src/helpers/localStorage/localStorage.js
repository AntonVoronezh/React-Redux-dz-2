export const setInStorage = (item, flag) => JSON.stringify(localStorage.setItem(item, flag));
export const getInStorage = item => JSON.parse(localStorage.getItem(item));
