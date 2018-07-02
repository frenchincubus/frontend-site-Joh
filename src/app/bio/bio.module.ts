import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BioComponent } from './bio.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { DiscoComponent } from './disco/disco.component';
import { LiveComponent } from './live/live.component';
import { StudioComponent } from './studio/studio.component';
import { BandComponent } from './band/band.component';
import { BioRoutingModule } from './bio-routing.module';
import { ServerService } from '../server.service';

@NgModule({
  declarations: [
    BioComponent,
    ArtisteComponent,
    DiscoComponent,
    LiveComponent,
    StudioComponent,
    BandComponent
  ],
  imports: [
    BioRoutingModule,
    CommonModule,
    NgbModule
  ],
  providers: [ServerService],
})

export class BioModule {}
