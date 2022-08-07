import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from 'src/components/auth/containers/forgotpassword/forgotpassword.component';
import { LocalHomeComponent } from 'src/components/auth/containers/local-home/local-home.component';
import { LoginOtpComponent } from 'src/components/auth/containers/login-otp/login-otp.component';
import { LoginComponent } from 'src/components/auth/containers/login/login.component';
import { SigninComponent } from 'src/components/auth/containers/signin/signin.component';
import { StoreDetailsComponent } from 'src/components/local/store-details/store-details.component';
import { CategoryCardComponent } from 'src/shared/components/category-card/category-card.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../components/auth/auth.module').then(m => m.AuthModule)
  },

  
  { path: 'local-home', component: LocalHomeComponent },
  {
    path: 'store',
    component: StoreDetailsComponent,
    children: [{ path: ':id', component: StoreDetailsComponent }],
  },
  {
    path: 'shops-by-categoires',
    component: CategoryCardComponent,
    children: [{ path: ':id', component: CategoryCardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
