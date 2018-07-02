import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertsComponent } from './concerts.component';
import { FuturComponent } from './futur/futur.component';
import { PasseComponent } from './passe/passe.component';

const concertRouting: Routes = [
  {path: '', component: ConcertsComponent, children: [
    {path: '/futurs', component: FuturComponent},
    {path: '/passes', component: PasseComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(concertRouting)],
  exports: [RouterModule]
})

export class ConcertsRoutingModule {}
