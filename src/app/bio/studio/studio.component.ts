import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  images = [];

  constructor(private serverService : ServerService) { }

  ngOnInit() {
    console.log('init initié');
    this.serverService.getImages().subscribe(
      (images: any[]) => this.images = images.filter(image => image.categorie.id === 4),
      (error) => console.log(error)
    );
    // this.images = this.images.filter(image => image.categorie.id === 4);
  }

}
