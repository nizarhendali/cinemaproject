import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcinemaComponent } from './listcinema.component';

describe('ListcinemaComponent', () => {
  let component: ListcinemaComponent;
  let fixture: ComponentFixture<ListcinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
