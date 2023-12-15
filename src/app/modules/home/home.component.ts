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
  offset = 0;
  grid: any;
  formControl = new FormControl('gifs');
  constructor(private giphyService: GiphyService) {
    this.formControl.valueChanges.subscribe(() => {
      console.log(this.formControl.value)
      switch (this.formControl.value) {
        case 'gifs':
          console.log("1")
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingGifs)
          break;
        case 'stickers':
          console.log("2")
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingStickers)
          break;
        case 'videos':
          console.log("3")
          this.grid.remove();
          this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingVideos)
          break;
      }
    })
  }



  async ngOnInit(): Promise<void> {
    this.grid = this.giphyService.makeGrid(document.getElementById('grid')!, this.giphyService.fetchTrendingGifs)
  }
}
