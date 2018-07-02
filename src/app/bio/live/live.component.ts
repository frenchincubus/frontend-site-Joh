import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  images = [];

  constructor(private serverService : ServerService) { }

  ngOnInit() {
    console.log('init initié');
    this.serverService.getImages().subscribe(
      (images: any[]) => this.images = images.filter(image => image.categorie.id === 5),
      (error) => console.log(error)
    );
    // this.images = this.images.filter(image => image.categorie.id === 4);
  }

}
