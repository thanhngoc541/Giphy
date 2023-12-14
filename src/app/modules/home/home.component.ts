import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../core/services/giphy.service';
import { renderGif, renderGrid } from '@giphy/js-components';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { throttle } from 'throttle-debounce';
import { MatDialog } from '@angular/material/dialog';
import { GifModalComponent } from 'src/app/shared/components/gif-modal/gif-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offset = 0;
  gifs: any = [];
  constructor(private giphyService: GiphyService, public dialog: MatDialog) {
  }
  openDialog(gif: any): void {
    const dialogRef = this.dialog.open(GifModalComponent, {
      data: { gif },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  makeGrid = (targetEl: HTMLElement) => {
    const render = () => {
      // here is the @giphy/js-components import
      return renderGrid(
        {
          width: innerWidth,
          fetchGifs: this.giphyService.fetchGifs,
          columns: innerWidth < 1000 ? 2 : innerWidth > 1500 ? 4 : 3,
          gutter: 6,
          noLink: true,
          hideAttribution: true,
          onGifClick: (gif: any) => {
            console.log(gif)
            this.openDialog(gif)
          },
        },
        targetEl
      )
    }
    const resizeRender = throttle(500, render)
    window.addEventListener('resize', resizeRender, false)
    const remove = render()
    return {
      remove: () => {
        remove()
        window.removeEventListener('resize', resizeRender, false)
      },
    }
  }
  async ngOnInit(): Promise<void> {
    this.gifs = (await this.giphyService.fetchGifs(this.offset)).data;
    this.offset += 10;
    console.log(this.gifs)
    // this.vanillaJSGif(this.gifs[0], document.getElementById('gif')!)
    this.makeGrid(document.getElementById('grid')!)
  }
}
