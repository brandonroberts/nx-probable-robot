import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearch from './+state/search';
import { SearchEffects } from './+state/search/search.effects';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserResultsComponent } from './components/user-results/user-results.component';
import { UserSearchboxComponent } from './components/user-searchbox/user-searchbox.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([SearchEffects]),
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducer),
    RouterModule.forChild([
      { path: '', component: UserSearchComponent }
    ])
  ],
  declarations: [UserSearchComponent, UserResultsComponent, UserSearchboxComponent]
})
export class UserSearchModule {}
