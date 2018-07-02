import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioComponent } from './bio.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { DiscoComponent } from './disco/disco.component';
import { LiveComponent } from './live/live.component';
import { StudioComponent } from './studio/studio.component';
import { BandComponent } from './band/band.component';

const bioRoutes: Routes = [
  { path: '', component: BioComponent, children: [
    { path: 'artiste', component: ArtisteComponent },
    { path: 'discographie', component: DiscoComponent},
    { path: 'equipelive', component: LiveComponent},
    { path: 'equipestudio', component: StudioComponent},
    { path: 'autourdugroupe', component: BandComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(bioRoutes)],
  exports: [RouterModule]
})
export class BioRoutingModule {

}
