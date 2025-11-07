import { Routes } from '@angular/router';
import { List } from './view/constant-components/list/list';
import { NavBar } from './view/constant-components/nav-bar/nav-bar';
import { LoginPage } from './view/personalized/login-page/login-page';

export const routes: Routes = [
    { path: "", component: LoginPage, title: "Nav bar page"},
    { path: "list", component: NavBar, title: "List page"},
];
