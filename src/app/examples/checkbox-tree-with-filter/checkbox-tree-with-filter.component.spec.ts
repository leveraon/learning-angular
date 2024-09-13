import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTreeWithFilterComponent } from './checkbox-tree-with-filter.component';

describe('CheckboxTreeWithFilterComponent', () => {
  let component: CheckboxTreeWithFilterComponent;
  let fixture: ComponentFixture<CheckboxTreeWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxTreeWithFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxTreeWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
