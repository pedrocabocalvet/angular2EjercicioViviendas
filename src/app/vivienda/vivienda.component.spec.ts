import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaComponent } from './vivienda.component';

describe('ViviendaComponent', () => {
  let component: ViviendaComponent;
  let fixture: ComponentFixture<ViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
