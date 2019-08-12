import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';

export const searchFeatureKey = 'search';

export interface State {
  total: number;
  items: any[];
  page: number;
  searchTerms: string | null;
  error: string | null;
}

export interface SearchPartialState {
  readonly search: State;
}

export const initialState: State = {
  total: 0,
  items : [],
  page: 1,
  searchTerms: '',
  error: null
};

const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchUsers, 
    (state, action) => ({ ...state, searchTerms: action.searchTerms, page: 1, items: [] })),
  on(SearchActions.searchUsersSuccess,
    (state, action) => ({...state, items: action.items, total: action.total })),
  on(SearchActions.searchUsersFailure,
    (state, action) => ({...state, error: action.error })),
);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}
