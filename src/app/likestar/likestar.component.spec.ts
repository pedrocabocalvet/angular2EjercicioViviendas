import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikestarComponent } from './likestar.component';

describe('LikestarComponent', () => {
  let component: LikestarComponent;
  let fixture: ComponentFixture<LikestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
