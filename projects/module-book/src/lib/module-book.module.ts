import {NgModule} from '@angular/core';
import {UserAddressBookComponent} from './user-address-book/user-address-book.component';
import {OrgTreeSelectorComponent} from './org-tree-selector/org-tree-selector.component';
import {UserSelectorComponent} from './user-selector/user-selector.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {OrgService} from './service/org.service';
import {UserAddressBookService} from './service/user-address-book.service';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzModalModule, NzModalService} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    UserAddressBookComponent,
    OrgTreeSelectorComponent,
    UserSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTreeModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzModalModule,
    NzButtonModule
  ],
  exports: [
    UserAddressBookComponent,
    OrgTreeSelectorComponent,
    UserSelectorComponent
  ],
  providers: [
    UserService,
    OrgService,
    NzModalService,
    UserAddressBookService
  ]
})
export class ModuleBookModule {
}
