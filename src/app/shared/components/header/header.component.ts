import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isStartWithImg = false;

  organization: any = null;
  tabs: any = [{ name: 'Home', slug: '/' }];
  scrolled: boolean = false;
  form = this.formBuilder.group({
    searchString: ['', []],
  });
  constructor(private router: Router, private formBuilder: FormBuilder,) {
    this.scrolled = window.pageYOffset > 100;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 100;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  async ngOnInit(): Promise<void> {

  }
  search() {
    this.router.navigate(['/search/', this.form.value.searchString]);

  }
  redirect(url: string) {
    this.router.navigate(['/', url]);
  }
}
