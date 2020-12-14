import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserAddressBookService} from 'module-book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;

  constructor(private userAddressBookService: UserAddressBookService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      users: this.fb.control([])
    });
  }

  openAddressBookDialog() {
    this.userAddressBookService.select(this.form.value.users).subscribe(res => {
      this.form.controls.users.patchValue(res);
    });
  }
}
