import { AuthLoginComponent } from './auth-login';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './shared';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
        AuthComponent,
        AuthLoginComponent,
    ],
    providers: [AuthService],
})
export class AuthModule { }
