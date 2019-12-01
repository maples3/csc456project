import { IAppState, defaultState } from "../types/state";
import { AppActions, ADD_ARTICLE } from "../types/actions";

function mainReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    console.log("MainReducer!")

    switch(action.type) {
        case ADD_ARTICLE:
            // Create a brand new array and object.  React only does a shallow compare,
            // so if the array object itself doesn't get replaced, the CardList won't re-render.
            let newArray = [...state.cards, action.article];
            state = { cards: newArray }
            break;
    }
    
    return state;
}

export default mainReducer;
