import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSearchGenreComponent } from './sound-search-genre.component';

describe('SoundSearchGenreComponent', () => {
  let component: SoundSearchGenreComponent;
  let fixture: ComponentFixture<SoundSearchGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundSearchGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundSearchGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
