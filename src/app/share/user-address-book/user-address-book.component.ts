import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-address-book',
  templateUrl: './user-address-book.component.html',
  styleUrls: ['./user-address-book.component.scss']
})
export class UserAddressBookComponent implements OnInit {

  scopeUsers: User[] = [];
  selectedUsers: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  getUsersUnderOrg(selectedOrgId: string) {
    this.userService.getUsersByOrgId(selectedOrgId).subscribe(users => {
      this.scopeUsers = users;
    });
  }

  selectUser(user: User) {
    if (this.isSelected(user)) {
      this.selectedUsers = this.selectedUsers.filter($user => $user.userId !== user.userId);
    } else {
      this.selectedUsers.push(user);
    }
  }

  private isSelected(user: User): boolean {
    return !!this.selectedUsers.find($user => $user.userId === user.userId);
  }
}
