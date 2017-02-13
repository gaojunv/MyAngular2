import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './guards';

const appRoutes: Routes = [
    { path: '',
      loadChildren: './home/home.module#HomeModule',
      //canLoad: [AuthGuard]
    },
    { path:
      'login',
      component: LoginComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];

export const Routing = RouterModule.forRoot(appRoutes);

export const RoutedComponents = [ LoginComponent];

export const RoutedService = [AuthGuard];
