// TODO: Import action type constants
// TODO: Export a setFilter action creator that accepts a category: string
// TODO: Export a clearFilters action creator (no payload)
// Use `as const` on the return to get literal types, matching the expenses/actions.ts pattern.
import { SET_FILTER, CLEAR_FILTERS } from "./actionTypes";
export const setFilter = (category: string) =>
  ({
    type: SET_FILTER,
    payload: category,
  }) as const;
export const clearFilters = () =>
  ({
    type: CLEAR_FILTERS,
  }) as const;
export type FilterAction =
  | ReturnType<typeof setFilter>
  | ReturnType<typeof clearFilters>;
