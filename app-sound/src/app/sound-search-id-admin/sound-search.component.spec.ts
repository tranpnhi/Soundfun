import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSearchComponent } from './sound-search.component';

describe('SoundSearchComponent', () => {
  let component: SoundSearchComponent;
  let fixture: ComponentFixture<SoundSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
