import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

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
