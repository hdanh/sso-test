import { AuthGuard } from './core/auth-guard.service';
import { CoreModule } from './core/core.module';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared';
import { HomeComponent } from './home';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
    ], { useHash: true, preloadingStrategy: PreloadAllModules }),
    SharedModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
