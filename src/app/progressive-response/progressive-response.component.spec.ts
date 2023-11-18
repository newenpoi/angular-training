import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveResponseComponent } from './progressive-response.component';

describe('ProgressiveResponseComponent', () => {
  let component: ProgressiveResponseComponent;
  let fixture: ComponentFixture<ProgressiveResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressiveResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
