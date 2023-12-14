import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifModalComponent } from './gif-modal.component';

describe('GifModalComponent', () => {
  let component: GifModalComponent;
  let fixture: ComponentFixture<GifModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifModalComponent]
    });
    fixture = TestBed.createComponent(GifModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
