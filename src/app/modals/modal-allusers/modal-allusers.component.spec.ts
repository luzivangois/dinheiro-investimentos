import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAllUsersComponent } from './modal-allusers.component';

describe('ModalAllusersComponent', () => {
  let component: ModalAllUsersComponent;
  let fixture: ComponentFixture<ModalAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAllUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
