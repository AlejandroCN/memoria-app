import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  public getConfig(): Promise<any> {
    return this.http.get('assets/data/game-config.json').pipe(
      map(response => response as any)
    ).toPromise();
  }

}
