import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {NzButtonModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {ModuleBookModule} from 'module-book';


@NgModule({
  declarations: [HomePageComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    ModuleBookModule
  ]
})
export class HomePageModule {
}
