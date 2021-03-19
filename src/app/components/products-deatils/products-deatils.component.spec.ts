import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDeatilsComponent } from './products-deatils.component';

describe('ProductsDeatilsComponent', () => {
  let component: ProductsDeatilsComponent;
  let fixture: ComponentFixture<ProductsDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
