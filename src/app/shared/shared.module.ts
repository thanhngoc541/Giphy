import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifModalComponent } from './components/gif-modal/gif-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxFilesizeModule } from 'ngx-filesize';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from '../modules/home/home.component';


@NgModule({
  declarations: [
    GifModalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NgxFilesizeModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
