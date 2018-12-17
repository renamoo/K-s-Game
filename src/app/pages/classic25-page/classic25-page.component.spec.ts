import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Classic25PageComponent } from './classic25-page.component';

describe('Classic25PageComponent', () => {
  let component: Classic25PageComponent;
  let fixture: ComponentFixture<Classic25PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Classic25PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Classic25PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
