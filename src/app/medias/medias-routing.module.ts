import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediasComponent } from './medias.component';
import { AudioComponent } from './audio/audio.component';
import { VideosComponent } from './videos/videos.component';
import { PresseComponent } from './presse/presse.component';
import { PhotosComponent } from './photos/photos.component';

const mediasRoutes : Routes = [
  { path: '', component: MediasComponent, children: [
    {path: '/audio', component: AudioComponent},
    {path: '/videos', component: VideosComponent},
    {path: '/presse', component: PresseComponent},
    {path: '/photos', component: PhotosComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(mediasRoutes)],
  exports: [RouterModule]
})

export class MediasRoutingModule {}
