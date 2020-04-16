import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  faHeart = faHeart;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  constructor() { }

  ngOnInit(): void {
  }

}
