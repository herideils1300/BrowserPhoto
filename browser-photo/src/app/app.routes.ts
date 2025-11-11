import { Routes } from '@angular/router';
import { List } from './view/constant-components/list/list';
import { NavBar } from './view/constant-components/nav-bar/nav-bar';
import { LoginPage } from './view/personalized/login-page/login-page';
import { RegisterPage } from './view/personalized/register-page/register-page';
import { PackagePickPage } from './view/personalized/register-page/subSlides/package-pick-page/package-pick-page';
import { PackageStatsPage } from './view/personalized/package-stats-page/package-stats-page';
import { UploadPage } from './view/personalized/upload-page/upload-page';

export const routes: Routes = [
    { path: "", component: UploadPage, title: "Nav bar page"},
    { path: "list", component: NavBar, title: "List page"},
];
