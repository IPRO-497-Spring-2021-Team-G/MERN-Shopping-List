//import {v4 as uuid} from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

// Lesson 6
// // That's where the actual state goes, that's where we check our actions
// const initialState = {
//     items: [
//         { id: uuid(), name: 'Eggs' },
//         { id: uuid(), name: 'Milk' },
//         { id: uuid(), name: 'Steak' },
//         { id: uuid(), name: 'Water' }
//     ]
// }

// Lesson 7
const initialState = {
    items: [],
    loading: false
};

// action is an object that will have a type attached to it
export default function(state = initialState, action) {
    // Test action type
    switch(action.type) {
        case GET_ITEMS:
            return {
                // Make a copy of the current state
                ...state,
                // add data
                items: action.payload,
                loading: false
                // a spinner can be added here
            };
        case ADD_ITEM:
            return {
                ...state,
                // making a copy of the state, instead of mutating it
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                // Filter out the deleted item, so it is not returned in an array
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}