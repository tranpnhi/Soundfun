import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersAdminComponent } from './banners-admin.component';

describe('BannersAdminComponent', () => {
  let component: BannersAdminComponent;
  let fixture: ComponentFixture<BannersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
