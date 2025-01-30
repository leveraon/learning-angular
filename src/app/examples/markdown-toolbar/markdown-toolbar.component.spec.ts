import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownToolbarComponent } from './markdown-toolbar.component';

describe('MarkdownToolbarComponent', () => {
  let component: MarkdownToolbarComponent;
  let fixture: ComponentFixture<MarkdownToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
