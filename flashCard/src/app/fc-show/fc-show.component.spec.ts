import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcShowComponent } from './fc-show.component';

describe('FcShowComponent', () => {
  let component: FcShowComponent;
  let fixture: ComponentFixture<FcShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
