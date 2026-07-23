import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"user-page",
        pathMatch: 'full'
    },
    {
        path:"user-page",
        component: UserComponent
    },
    {
        path:"data-binding-page",
        component: DataBindingComponent
    }    
];
