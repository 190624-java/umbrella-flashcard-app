import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcAddComponent } from './fc-add.component';

describe('FcAddComponent', () => {
  let component: FcAddComponent;
  let fixture: ComponentFixture<FcAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
