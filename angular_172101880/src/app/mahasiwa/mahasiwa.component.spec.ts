import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiwaComponent } from './mahasiwa.component';

describe('MahasiwaComponent', () => {
  let component: MahasiwaComponent;
  let fixture: ComponentFixture<MahasiwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahasiwaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahasiwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
