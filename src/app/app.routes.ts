import { Routes } from '@angular/router';
import { ProductComponent } from './pantallas/product/product.component';
import { UserComponent } from './pantallas/user/user.component';
import { HomeComponent } from './pantallas/home/home.component';

export const routes: Routes = [

    {path: 'products', component: ProductComponent},
    {path: 'users', component: UserComponent},
    {path: 'home', component: HomeComponent},
];
