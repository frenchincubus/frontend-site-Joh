import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiversComponent } from './divers.component';
import { ContactComponent } from './contact/contact.component';
import { LiensComponent } from './liens/liens.component';
import { AccordsComponent } from './accords/accords.component';

const diversRouting: Routes = [
  {path: '', component: DiversComponent, children: [
    {path: '/contact', component: ContactComponent},
    {path: '/liens', component: LiensComponent},
    {path: '/accords', component: AccordsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(diversRouting)],
  exports: [RouterModule]
})

export class DiversRoutingModule {}
