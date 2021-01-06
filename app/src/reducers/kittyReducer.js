const KittyReducer = (state, action) => {
    switch (action.type) {

        case ('NEW_FACT'):
            return { ...state };
        default:
            return state
    }

}