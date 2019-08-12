import { Component, OnInit } from '@angular/core';
import * as fromSearch from '@mygh/user-search/state/search';
import { SearchActions } from '@mygh/user-search/state/search';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mygh-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  total$ = this.store.select(fromSearch.selectTotal);
  results$ = this.store.select(fromSearch.selectSearchResults);
  
  constructor(private store: Store<fromSearch.SearchPartialState>) {}

  ngOnInit() {}

  onSearch(searchTerms: string, page = 1) {
    this.store.dispatch(SearchActions.searchUsers({ searchTerms }));
  }

  // previousPage() {
  //   this.page--;
  //   this.searchUsers(this.searchTerms, this.page);
  // }

  // nextPage() {
  //   this.page++;
  //   this.searchUsers(this.searchTerms, this.page);
  // }
}
