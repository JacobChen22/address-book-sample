import {Component, ViewContainerRef} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {UserAddressBookComponent} from './share/user-address-book/user-address-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modal: NzModalService,
              private viewContainerRef: ViewContainerRef) {
  }

  title = 'address-book-sample';


  openAddressBookDialog() {
    const modal = this.modal.create({
      nzTitle: '人员地址簿',
      nzContent: UserAddressBookComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzGetContainer: () => document.body,
      nzComponentParams: {
        selectedUsers: [],
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: '取消',
          onClick: () => {
          }
        },
        {
          label: '确认',
          onClick: () => {
          }
        }
      ]
    });
  }
}
