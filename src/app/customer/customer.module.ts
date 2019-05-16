import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    CustomerComponent,
    PersonalDetailsComponent,
    AddressComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CustomerModule { }
