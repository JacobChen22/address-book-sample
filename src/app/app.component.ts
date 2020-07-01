import {Component} from '@angular/core';
import {UserAddressBookService} from './share/service/user-address-book.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedUser: User[] = [];

  constructor(private userAddressBookService: UserAddressBookService) {
  }

  title = 'address-book-sample';

  openAddressBookDialog() {
    this.userAddressBookService.select(this.selectedUser).subscribe(res => {
      this.selectedUser = res;
    });
  }
}
