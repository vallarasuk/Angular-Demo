import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLinkComponentsComponent } from './video-link-components.component';

describe('VideoLinkComponentsComponent', () => {
  let component: VideoLinkComponentsComponent;
  let fixture: ComponentFixture<VideoLinkComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLinkComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLinkComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
