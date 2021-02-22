import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  private apiUrl = `${environment.apiUrl}/api/records`;

  constructor(private http: HttpClient) {}

  public save(record: Record): Observable<Record> {
    return this.http
      .post(`${this.apiUrl}`, record)
      .pipe(map((response) => response as Record));
  }

  public findAll(): Observable<Record[]> {
    return this.http.get(this.apiUrl).pipe(
      map(response => response as Record[])
    );
  }

}
