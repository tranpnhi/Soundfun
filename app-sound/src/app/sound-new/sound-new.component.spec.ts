import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundNewComponent } from './sound-new.component';

describe('SoundNewComponent', () => {
  let component: SoundNewComponent;
  let fixture: ComponentFixture<SoundNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
