import { Component } from '@angular/core';
import { GiphyService } from '../../core/services/giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private giphyService: GiphyService) {
    console.log(giphyService.fetchGifs(0));
  }
}
