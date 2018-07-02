import { NgModule } from '@angular/core';

import { ConcertsComponent } from './concerts.component';
import { FuturComponent } from './futur/futur.component';
import { PasseComponent } from './passe/passe.component';
import { ConcertsRoutingModule } from './concert-routing.module';

@NgModule({
  declarations: [
    ConcertsComponent,
    FuturComponent,
    PasseComponent
  ],
  imports: [ConcertsRoutingModule]
})

export class ConcertsModule {}
