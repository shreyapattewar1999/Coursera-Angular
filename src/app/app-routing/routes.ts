import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { DishdetailsComponent } from '../dishdetails/dishdetails.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path:'home', component: HomeComponent},
    { path:'menu', component: MenuComponent},
    { path:'', redirectTo:'/home', pathMatch:'full'}
];