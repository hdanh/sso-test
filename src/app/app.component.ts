import { AuthService } from './auth/shared/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sso-test';

  constructor(
    private authService: AuthService
  ) {
    this.authService.runInitialLoginSequence();
  }
}
