import { NgModule } from '@angular/core';

import { DiversComponent } from './divers.component';
import { ContactComponent } from './contact/contact.component';
import { LiensComponent } from './liens/liens.component';
import { AccordsComponent } from './accords/accords.component';
import { DiversRoutingModule } from './divers-routing.module';

@NgModule({
  declarations: [
    DiversComponent,
    ContactComponent,
    LiensComponent,
    AccordsComponent
  ],
  imports: [DiversRoutingModule]
})

export class DiversModule {}
