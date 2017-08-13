import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumularioComponent } from './forumulario.component';

describe('ForumularioComponent', () => {
  let component: ForumularioComponent;
  let fixture: ComponentFixture<ForumularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
