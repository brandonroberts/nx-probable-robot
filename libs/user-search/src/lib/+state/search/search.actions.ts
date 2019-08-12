import { createAction, props } from '@ngrx/store';

export const searchUsers = createAction(
  '[User Search Page] Search Users',
  props<{ searchTerms: string, page?: number }>()
);

export const searchUsersSuccess = createAction(
  '[GitHub Search API] Search Users Success',
  props<{ items: any[], total: number }>()
);

export const searchUsersFailure = createAction(
  '[GitHub Search API] Search Users Failure',
  props<{ error: string }>()
);

