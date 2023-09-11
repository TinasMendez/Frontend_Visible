import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileResultComponent } from './profile-result.component';

describe('ProfileResultComponent', () => {
  let component: ProfileResultComponent;
  let fixture: ComponentFixture<ProfileResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileResultComponent]
    });
    fixture = TestBed.createComponent(ProfileResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
