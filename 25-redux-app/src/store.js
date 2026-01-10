import { createStore } from "redux"
const counterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return {count : state.count + 1}
        }
        default: {
            return state
        }
    }
}

export const store = createStore(counterReducer);

