import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationFilePage } from './creation-file.page';

const routes: Routes = [
  {
    path: '',
    component: CreationFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationFilePageRoutingModule {}
