import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: CustomerComponent,
    children: [
      { path: '', component: PersonalDetailsComponent },
      { path: 'endereco', component: AddressComponent }
    ],
  },
  {
    path: 'cliente/:id', component: CustomerComponent,
    children: [
      { path: '', component: PersonalDetailsComponent },
      { path: 'endereco', component: AddressComponent }
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
