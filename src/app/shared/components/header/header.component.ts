import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isStartWithImg = false;

  organization: any = null;
  tabs: any = [{ name: 'Home', slug: 'home' }];
  scrolled: boolean = false;
  constructor(private router: Router) {
    this.scrolled = window.pageYOffset > 100;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log("scrolling", window.pageYOffset)
    this.scrolled = window.pageYOffset > 100;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  async ngOnInit(): Promise<void> {

  }

  redirect(url: string) {
    this.router.navigate(['/', url]);
  }
}
