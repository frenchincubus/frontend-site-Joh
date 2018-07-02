import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  albums = [];

  constructor(private serverService : ServerService) { }

  ngOnInit() {
    console.log('init disque initié');
    this.serverService.getDisques().subscribe(
      (albums: any[]) => this.albums = albums,
      (error) => console.log(error)
    );
  }

}
