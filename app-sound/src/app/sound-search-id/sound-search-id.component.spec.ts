import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSearchIdComponent } from './sound-search-id.component';

describe('SoundSearchIdComponent', () => {
  let component: SoundSearchIdComponent;
  let fixture: ComponentFixture<SoundSearchIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundSearchIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundSearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
