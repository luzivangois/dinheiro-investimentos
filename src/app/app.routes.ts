import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';
import { AccountsPanelComponent } from './pages/accounts-panel/accounts-panel.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'users-panel',
        component: UsersPanelComponent
    },
    {
        path: 'accounts-panel',
        component: AccountsPanelComponent
    }
];
