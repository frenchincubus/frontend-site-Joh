import { NgModule } from '@angular/core';

import { MediasComponent } from './medias.component';
import { AudioComponent } from './audio/audio.component';
import { VideosComponent } from './videos/videos.component';
import { PresseComponent } from './presse/presse.component';
import { PhotosComponent } from './photos/photos.component';
import { MediasRoutingModule } from './medias-routing.module';

@NgModule({
  declarations: [
    MediasComponent,
    AudioComponent,
    VideosComponent,
    PresseComponent,
    PhotosComponent
  ],
  imports: [MediasRoutingModule]
})

export class MediasModule {}
