import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SearchActions from './search.actions';
import { GithubService } from '@mygh/github-data-access';


@Injectable()
export class SearchEffects {
  searchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.searchUsers),
    switchMap(action => 
      this.githubService.searchUsers(action.searchTerms)
        .pipe(
          map(data => SearchActions.searchUsersSuccess({ items: data.items, total: data.total_count })),
          catchError(() => of(SearchActions.searchUsersFailure({ error: 'Search Failed' })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private githubService: GithubService
  ) {}

}
