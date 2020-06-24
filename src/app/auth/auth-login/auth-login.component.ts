import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';

import { TokenProxy } from '../../shared';

import { AuthModel, AuthService } from '../shared';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.pug',
    styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit, OnChanges {
    public form: FormGroup;
    public isSubmitting = false;

    private model: AuthModel;

    constructor(
        private fb: FormBuilder,
        private service: AuthService,
        private tokenProxy: TokenProxy,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) { }

    public ngOnInit() {
        this.model = new AuthModel();
        this.createForm();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.form.setValue({ ...this.model });
    }

    public onSubmit(): void {
        if (!this.form.valid) { return; }
        this.model = { ...this.form.value };
        this.isSubmitting = true;

        this.service
            .login(this.model)
            .then((user) => {
                this.isSubmitting = false;
                this.tokenProxy.token = user.access_token;
                const redirectUrl = this.route.queryParams[`redirectUrl`] || '/';
                this.router.navigateByUrl(redirectUrl);
            })
            .catch((error) => {
                this.isSubmitting = false;
                if (error.status === 401) {
                    this.snackBar.open(
                        'An error has occured',
                        'Error', {
                        panelClass: ['error-snack-bar']
                    });
                } else { throw error; }
            });
    }

    private createForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            isRemember: ''
        });
    }
}
