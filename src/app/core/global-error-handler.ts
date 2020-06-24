import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  private snackBar: MatSnackBar;
  constructor(private injector: Injector) {
    super();
  }

  public handleError(error: any): void {
    if (!this.snackBar) {
      this.snackBar = this.injector.get(MatSnackBar);
    }

    this.snackBar.open('An error has occured', 'Error', {
      panelClass: ['error-snack-bar'],
    });
    super.handleError(error);
  }
}
