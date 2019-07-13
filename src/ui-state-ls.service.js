
const UiStateLS = {};
const LS_UI_STATE_KEY = 'fitbiter-ui-state';

const updateState = (stateToUpdate) => {
    Object.assign(UiStateLS, stateToUpdate);
    localStorage.setItem(LS_UI_STATE_KEY, JSON.stringify(UiStateLS));
}

const getState = (date) => {
    const stateFromLS = JSON.parse(localStorage.getItem(LS_UI_STATE_KEY)) || UiStateLS;
    console.log(stateFromLS);
    return stateFromLS[date] ? stateFromLS[date] : null;
}

export const UiStateLocalStorageService = {
    updateState,
    getState,
}