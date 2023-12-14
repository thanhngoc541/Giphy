import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifModalComponent } from './components/gif-modal/gif-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxFilesizeModule } from 'ngx-filesize';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GifModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NgxFilesizeModule,
    MatIconModule
  ]
})
export class SharedModule { }
