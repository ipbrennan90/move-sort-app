export const ADD_ITEM = 'ADD_ITEM';
export const SELECT_TAB = 'SELECT_TAB';
export const SET_FAQS = 'SET_FAQS';
export const SET_TIPS = 'SET_TIPS';

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

export function setFaqs(faqs) {
    return {
        type: SET_FAQS,
        faqs
    };
}

export function setTips(tips) {
    return {
        type: SET_TIPS,
        tips
    };
}
