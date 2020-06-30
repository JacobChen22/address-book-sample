import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrgTreeSelectorComponent} from './org-tree-selector/org-tree-selector.component';
import {UserAddressBookComponent} from './user-address-book/user-address-book.component';
import {FormsModule} from '@angular/forms';
import {NzIconModule, NzInputModule, NzSelectModule, NzTreeModule} from 'ng-zorro-antd';
import {UserService} from './service/user.service';
import {OrgService} from './service/org.service';


@NgModule({
  declarations: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTreeModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
  ],
  exports: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent
  ],
  providers: [
    UserService,
    OrgService
  ]
})
export class ShareModule {
}
