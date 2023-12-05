import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdtemplateComponent } from './tdtemplate.component';

describe('TdtemplateComponent', () => {
  let component: TdtemplateComponent;
  let fixture: ComponentFixture<TdtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdtemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
