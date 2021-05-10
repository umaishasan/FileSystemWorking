import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationFilePageRoutingModule } from './creation-file-routing.module';

import { CreationFilePage } from './creation-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationFilePageRoutingModule
  ],
  declarations: [CreationFilePage]
})
export class CreationFilePageModule {}
