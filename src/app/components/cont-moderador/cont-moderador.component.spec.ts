import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContModeradorComponent } from './cont-moderador.component';

describe('ContModeradorComponent', () => {
  let component: ContModeradorComponent;
  let fixture: ComponentFixture<ContModeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContModeradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
