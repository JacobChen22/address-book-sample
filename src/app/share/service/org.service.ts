import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) {
  }

  getRootOrg(): Observable<any> {
    return this.http.get('localhost:8080/organization/child/root');
  }

  loadChildren(parentKey: string): Observable<any> {
    return this.http.get('');
  }
}
