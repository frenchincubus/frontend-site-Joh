import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { BioComponent } from './bio/bio.component';
import { MediasComponent } from './medias/medias.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { DiversComponent } from './divers/divers.component';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'bio&infos', loadChildren: './bio/bio.module#BioModule'},
  { path: 'medias', loadChildren: './medias/medias.module#MediasModule'},
  { path: 'concerts', loadChildren: './concerts/concerts.module#ConcertsModule'},
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'divers', loadChildren: './divers/divers.module#DiversModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
