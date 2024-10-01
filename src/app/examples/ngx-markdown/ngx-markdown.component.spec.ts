import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarkdownComponent } from './ngx-markdown.component';

describe('NgxMarkdownComponent', () => {
  let component: NgxMarkdownComponent;
  let fixture: ComponentFixture<NgxMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMarkdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
