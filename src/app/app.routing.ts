import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

export const RoutedComponents = [HomeComponent, LoginComponent];

export const RoutedService = [AuthGuard];
