import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarAgregarPageRoutingModule } from './lugar-agregar-routing.module';

import { LugarAgregarPage } from './lugar-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarAgregarPageRoutingModule
  ],
  declarations: [LugarAgregarPage]
})
export class LugarAgregarPageModule {}
