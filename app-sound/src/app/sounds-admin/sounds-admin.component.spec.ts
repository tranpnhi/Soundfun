import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsAdminComponent } from './sounds-admin.component';

describe('SoundsAdminComponent', () => {
  let component: SoundsAdminComponent;
  let fixture: ComponentFixture<SoundsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
