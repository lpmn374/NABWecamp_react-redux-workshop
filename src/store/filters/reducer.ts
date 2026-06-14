// TODO: Import action type constants
// TODO: Define a FiltersState interface/type with a `category` field (string | null)
// TODO: Export a filtersReducer function (using `export function` or `export const`)
//       - Default state: { category: null }
//       - Handle SET_FILTER: return { category: action.payload }
//       - Handle CLEAR_FILTERS: return { category: null }
//       - Default: return state
import { SET_FILTER, CLEAR_FILTERS } from "./actionTypes";
import type { FilterAction } from "./actions";
export interface FiltersState {
  category: string | null;
}
const initialState: FiltersState = {
  category: null,
};
export function filterReducer(
  state = initialState,
  action: FilterAction,
): FiltersState {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        category: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        category: null,
      };
    default:
      return state;
  }
}
