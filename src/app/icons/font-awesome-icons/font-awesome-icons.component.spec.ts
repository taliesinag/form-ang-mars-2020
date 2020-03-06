import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeIconsComponent } from './font-awesome-icons.component';

describe('FontAwesomeIconsComponent', () => {
  let component: FontAwesomeIconsComponent;
  let fixture: ComponentFixture<FontAwesomeIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
