export const ADD_ITEM = 'ADD_ITEM';
export const SELECT_TAB = 'SELECT_TAB';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}

export function selectTab(tab) {
    return {
        type: SELECT_TAB,
        tab
    };
}
