import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzTreeNodeOptions} from 'ng-zorro-antd';
import {Observable} from 'rxjs';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) {
  }

  getRootOrg(): NzTreeNodeOptions {
    return undefined;
  }

  loadChildren(parentKey: string): Observable<any> {
    return this.http.get('');
  }
}
