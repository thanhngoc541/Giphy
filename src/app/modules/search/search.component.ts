import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from 'src/app/core/services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  grid: any;
  searchString: string = '';
  constructor(private giphyService: GiphyService, private route: ActivatedRoute,) {
    //Update list gifs when searching changes
    this.route.params.subscribe((param: any) => {
      this.searchString = param.searchString
      this.grid.remove();
      this.grid = this.giphyService.makeGrid(document.getElementById('search')!, this.giphyService.search(this.searchString))
    });
  }



  async ngOnInit(): Promise<void> {
    //Init list gifs
    this.grid = this.giphyService.makeGrid(document.getElementById('search')!, this.giphyService.search(this.searchString))
  }
}
