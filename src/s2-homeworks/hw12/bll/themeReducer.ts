const initState = {
    themeId: 1,
}

export type initialStateType = typeof initState
export const themeReducer = (state = initState, action: changeThemeIdActionType): initialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeIdActionType = {
    type: 'SET_THEME_ID';
    id: number;
};