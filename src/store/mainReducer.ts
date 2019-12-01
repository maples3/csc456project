import { IAppState, defaultState } from "../types/state";
import { AppActions } from "../types/actions";

function mainReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    return state;
}

export default mainReducer;
