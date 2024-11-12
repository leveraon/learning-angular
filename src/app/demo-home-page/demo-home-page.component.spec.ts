import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHomePageComponent } from './demo-home-page.component';

describe('DemoHomePageComponent', () => {
  let component: DemoHomePageComponent;
  let fixture: ComponentFixture<DemoHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DemoHomePageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DemoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
