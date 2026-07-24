import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';
import { DynamicStylingComponent } from './pages/dynamic-styling/dynamic-styling.component';

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
    },
     {   path: "control-flow-page",
        component: ControlFlowComponent
     } ,
     {
        path:"dynamic-styling-page",
        component:DynamicStylingComponent
     },
     
     

];