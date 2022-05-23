import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Author, RawAuthor } from '../../../core/common';

@Injectable()
export class AuthorsDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Author[]> {
    return this.http.get<RawAuthor[]>('http://localhost:3004/authors').pipe(
      map((list) =>
        list.map(({ id, name }) => {
          try {
            const names = name.split(' ');
            return { id, name: names[0], lastName: names[1] };
          } catch (e) {
            return { id, name, lastName: name };
          }
        })
      )
    );
  }
}
