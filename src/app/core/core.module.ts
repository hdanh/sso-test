import { NgModule, Optional, SkipSelf, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authConfig } from './auth-config';
import { AuthGuard } from './auth-guard.service';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';

export function storageFactory(): OAuthStorage {
    return sessionStorage;
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        OAuthModule.forRoot()
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthGuard,
    ],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: AuthConfig, useValue: authConfig },
                { provide: OAuthStorage, useFactory: storageFactory },
            ]
        };
    }
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
