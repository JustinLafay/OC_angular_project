import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Princesse Mononoke';
    this.description = "Un belle photo de l'affiche du film";
    this.createdDate = new Date();
    this.snaps = 15;
    this.imageUrl = 'https://fr.web.img2.acsta.net/pictures/21/02/09/12/46/1884055.jpg';
  }
}
