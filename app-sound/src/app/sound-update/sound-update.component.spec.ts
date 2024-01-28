import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundUpdateComponent } from './sound-update.component';

describe('SoundUpdateComponent', () => {
  let component: SoundUpdateComponent;
  let fixture: ComponentFixture<SoundUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
