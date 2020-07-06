import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {NzButtonModule} from 'ng-zorro-antd';
import {ShareModule} from '../share/share.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomePageRoutingModule} from './home-page-routing.module';


@NgModule({
  declarations: [HomePageComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    ShareModule
  ]
})
export class HomePageModule {
}
