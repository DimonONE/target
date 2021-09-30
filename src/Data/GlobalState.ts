import { createStore } from 'react-hooks-global-state';

export interface SettingsType {
  settings: {
    blur?: string;
    background?: string;
    overflow?: boolean;
  }
}

interface InitialStateType extends SettingsType {
  count: number
}

interface ActionType  {
  type: string
}

const initialState: InitialStateType = {
  count: 0,
  settings: {
    overflow: false
  }
};

const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    default: return state;
  }
};






const store = createStore(reducer, initialState);
export const { useGlobalState } = store;