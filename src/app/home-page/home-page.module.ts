import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModuleBookModule} from '../../../projects/module-book/src/lib/module-book.module';
import {NzButtonModule} from 'ng-zorro-antd/button';


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
