import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrgTreeSelectorComponent} from './org-tree-selector/org-tree-selector.component';
import {UserAddressBookComponent} from './user-address-book/user-address-book.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent
  ]
})
export class ShareModule {
}
