import { Component } from '@angular/core';
import { faPhoenixSquadron, faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faCode, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeIcon = faPhoenixSquadron;
  accountIcon = faUserCircle;
  skillsIcon = faJediOrder;
  proyectsIcon = faCode;
  contactIcon = faEnvelopeOpen;
  title = 'portfol';
}
