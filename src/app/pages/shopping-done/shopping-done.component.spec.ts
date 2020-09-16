import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDoneComponent } from './shopping-done.component';

describe('ShoppingDoneComponent', () => {
  let component: ShoppingDoneComponent;
  let fixture: ComponentFixture<ShoppingDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
