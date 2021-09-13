import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeadComponent } from './social-fead.component';

describe('SocialFeadComponent', () => {
  let component: SocialFeadComponent;
  let fixture: ComponentFixture<SocialFeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
