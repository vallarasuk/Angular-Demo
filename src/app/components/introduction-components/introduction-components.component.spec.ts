import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponentsComponent } from './introduction-components.component';

describe('IntroductionComponentsComponent', () => {
  let component: IntroductionComponentsComponent;
  let fixture: ComponentFixture<IntroductionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
