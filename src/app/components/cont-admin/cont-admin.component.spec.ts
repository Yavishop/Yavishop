import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContAdminComponent } from './cont-admin.component';

describe('ContAdminComponent', () => {
  let component: ContAdminComponent;
  let fixture: ComponentFixture<ContAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
