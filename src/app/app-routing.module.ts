import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  { 
    path: 'cliente', 
    component: CustomerComponent,
    children: [
      { path: '', component: PersonalDetailsComponent },
      { path: 'endereco', component: AddressComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
