import { Injectable } from '@angular/core';
import { GiphyFetch } from '@giphy/js-fetch-api'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  gf = new GiphyFetch('0qV1NdHQWsb7NXV5B4meLUbdTAPI8HOD')
  constructor() { }
  fetchGifs = (offset: number) => this.gf.trending({ offset, limit: 10 })
}
