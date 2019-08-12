import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {}

  searchUsers(searchTerms: string, page = 1) {
    return this.http
      .get<{ items: any[], total_count: number }>(`https://api.github.com/search/users?q=${searchTerms}&page=${page}`);
  }
}
