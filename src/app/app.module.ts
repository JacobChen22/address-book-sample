import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzButtonModule, NzModalService} from 'ng-zorro-antd';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    NzButtonModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    NzModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
