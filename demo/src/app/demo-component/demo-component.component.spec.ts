import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentComponent } from './demo-component.component';

describe('DemoComponentComponent', () => {
  let component: DemoComponentComponent;
  let fixture: ComponentFixture<DemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
