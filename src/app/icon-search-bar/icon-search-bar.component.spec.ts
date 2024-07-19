import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSearchBarComponent } from './icon-search-bar.component';

describe('IconSearchBarComponent', () => {
  let component: IconSearchBarComponent;
  let fixture: ComponentFixture<IconSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
