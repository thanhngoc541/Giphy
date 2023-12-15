import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { renderGrid } from '@giphy/js-components';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { GifModalComponent } from 'src/app/shared/components/gif-modal/gif-modal.component';
import { throttle } from 'throttle-debounce';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  gf = new GiphyFetch('0qV1NdHQWsb7NXV5B4meLUbdTAPI8HOD')
  constructor(public dialog: MatDialog) { }
  fetchCategories = () => this.gf.categories()
  fetchSubCategories = (category: string) => this.gf.subcategories(category)
  fetchReactionGifs = (offset: number) => this.gf.channels('reactions')
  fetchTrendingGifs = (offset: number) => this.gf.trending({ type: 'gifs', offset, limit: 10 })
  fetchTrendingStickers = (offset: number) => this.gf.trending({ type: 'stickers', offset, limit: 10 })
  fetchTrendingVideos = (offset: number) => this.gf.trending({ type: 'videos', offset, limit: 10 })
  fetchAnimate = (string: string) => this.gf.animate(string, { limit: 10 })

  search(searchString: string) {
    return (offset: number) => this.gf.search(searchString, { offset, limit: 10 })
  }
  //Render gifs list
  makeGrid = (targetEl: HTMLElement, fetchGifs: any) => {
    const render = () => {
      // here is the @giphy/js-components import
      return renderGrid(
        {
          width: innerWidth > 1200 ? 1200 : innerWidth,
          fetchGifs: fetchGifs,
          columns: innerWidth < 900 ? 2 : innerWidth < 1100 ? 3 : 4,
          gutter: 6,
          noLink: true,
          hideAttribution: true,
          onGifClick: (gif: any) => {
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

  //Popup modal when clicking on Gif
  openDialog(gif: any): void {
    const dialogRef = this.dialog.open(GifModalComponent, {
      data: { gif },
    });
    
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
