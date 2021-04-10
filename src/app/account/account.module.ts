import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AccountComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})

export class AccountModule { }
