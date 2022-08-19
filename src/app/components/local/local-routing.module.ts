import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverAddressComponent } from './deliver-address/deliver-address.component';
import { HomeComponent } from './home/home.component';
import { OffersShopCategoriesComponent } from './offers-shop-categories/offers-shop-categories.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  { path: 'offers', component: OffersShopCategoriesComponent },
  { path: 'deliver-address', component: DeliverAddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalRoutingModule {}
