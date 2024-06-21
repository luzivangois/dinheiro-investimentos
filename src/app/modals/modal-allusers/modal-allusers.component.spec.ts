import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAllusersComponent } from './modal-allusers.component';

describe('ModalAllusersComponent', () => {
  let component: ModalAllusersComponent;
  let fixture: ComponentFixture<ModalAllusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAllusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAllusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
