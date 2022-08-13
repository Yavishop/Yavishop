import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContUsuarioComponent } from './cont-usuario.component';

describe('ContUsuarioComponent', () => {
  let component: ContUsuarioComponent;
  let fixture: ComponentFixture<ContUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
