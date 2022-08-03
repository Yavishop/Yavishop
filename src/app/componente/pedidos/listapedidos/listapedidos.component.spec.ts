import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapedidosComponent } from './listapedidos.component';

describe('ListapedidosComponent', () => {
  let component: ListapedidosComponent;
  let fixture: ComponentFixture<ListapedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
