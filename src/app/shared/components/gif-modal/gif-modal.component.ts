import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { renderGif } from '@giphy/js-components';

@Component({
  selector: 'app-gif-modal',
  templateUrl: './gif-modal.component.html',
  styleUrls: ['./gif-modal.component.scss']
})
export class GifModalComponent implements OnInit {
  gif: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  vanillaJSGif = async (mountNode: HTMLElement,) => {
    // render a single gif
    renderGif({ gif: this.gif, width: 400, noLink: true, hideAttribution: true }, mountNode)
  }
  ngOnInit(): void {
    this.gif = this.data.gif
    this.vanillaJSGif(document.getElementById("gif")!);
  }
}
