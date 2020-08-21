import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home-card/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'login-card', 
    loadChildren: () => import('./login/login-card/login-card.module').then(m => m.LoginCardModule) 
  }, 
  { 
    path: 'password', 
    loadChildren: () => import('./login/password/password.module').then(m => m.PasswordModule) 
  },
  { 
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./register/register-card/register.module').then(m => m.RegisterModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
