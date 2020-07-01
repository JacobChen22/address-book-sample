import {Component, OnInit} from '@angular/core';
import {UserAddressBookService} from '../share/service/user-address-book.service';
import {User} from '../model/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedUser: User[] = [];

  constructor(private userAddressBookService: UserAddressBookService) {
  }

  ngOnInit(): void {
  }

  openAddressBookDialog() {
    this.userAddressBookService.select(this.selectedUser).subscribe(res => {
      this.selectedUser = res;
    });
  }
}
