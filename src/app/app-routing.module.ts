import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'login-card', 
    loadChildren: () => import('./login-card/login-card.module').then(m => m.LoginCardModule) 
  }, 
  { 
    path: 'password', 
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule) 
  }, 
  { 
    path: 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
