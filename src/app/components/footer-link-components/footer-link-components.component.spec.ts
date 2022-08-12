import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkComponentsComponent } from './footer-link-components.component';

describe('FooterLinkComponentsComponent', () => {
  let component: FooterLinkComponentsComponent;
  let fixture: ComponentFixture<FooterLinkComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLinkComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLinkComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
