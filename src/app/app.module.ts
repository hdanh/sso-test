import { AuthGuard, CoreModule, AppHttpInterceptor } from './core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared';
import { HomeComponent } from './home';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'test', component: TestComponent },
      ],
      { useHash: true, preloadingStrategy: PreloadAllModules }
    ),
    SharedModule,
    AuthModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
