import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarAgregarPage } from './lugar-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: LugarAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarAgregarPageRoutingModule {}
