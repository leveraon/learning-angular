import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandPanelComponent } from './expand-panel.component';

describe('ExpandPanelComponent', () => {
  let component: ExpandPanelComponent;
  let fixture: ComponentFixture<ExpandPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ExpandPanelComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ExpandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
