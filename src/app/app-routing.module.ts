import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './layout/dashboard-layout/navigation-bar/navigation-bar.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    component: NavigationBarComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
