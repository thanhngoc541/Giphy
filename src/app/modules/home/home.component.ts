import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../core/services/giphy.service';
import { renderGif, renderGrid } from '@giphy/js-components';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { throttle } from 'throttle-debounce';
import { MatDialog } from '@angular/material/dialog';
import { GifModalComponent } from 'src/app/shared/components/gif-modal/gif-modal.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  grid: any;
  formControl = new FormControl('gifs');
  constructor(private giphyService: GiphyService) {

    //Update list trending when type is changed
    this.formControl.valueChanges.subscribe(() => {
      switch (this.formControl.value) {
        case 'gifs':
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingGifs)
          break;
        case 'stickers':
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingStickers)
          break;
        case 'videos':
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingVideos)
          break;
      }
    })
  }



  async ngOnInit(): Promise<void> {
    //Init list trending gifs
    this.grid = this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingGifs)
  }
}
