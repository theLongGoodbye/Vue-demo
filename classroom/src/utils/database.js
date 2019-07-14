/**
 * 浏览器缓存公共方法
 * sessionStorage、localStorage的增、删、查方法统一维护
 */
const database = {
    session: {
        get(key) {
            const value = window.sessionStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        },
        set(key, value) {
            return window.sessionStorage.setItem(key, value ? JSON.stringify(value) : null);
        },
        remove(key) {
            return window.sessionStorage.removeItem(key);
        },
        clear() {
            return window.sessionStorage.clear();
        },
    },
    local: {
        get(key) {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        },
        set(key, value) {
            return window.localStorage.setItem(key, value ? JSON.stringify(value) : null);
        },
        remove(key) {
            return window.localStorage.removeItem(key);
        },
    },
};
export default database;
