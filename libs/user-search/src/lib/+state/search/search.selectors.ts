import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSearch from './search.reducer';

export const selectSearchState = createFeatureSelector<fromSearch.State>(fromSearch.searchFeatureKey);

export const selectSearchResults = createSelector(
    selectSearchState,
    searchState => searchState.items
);

export const selectTotal = createSelector(
    selectSearchState,
    searchState => searchState.total
);

export const selectError = createSelector(
    selectSearchState,
    searchState => searchState.error
);
