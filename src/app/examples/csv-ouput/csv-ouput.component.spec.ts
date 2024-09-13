import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvOuputComponent } from './csv-ouput.component';

describe('CsvOuputComponent', () => {
  let component: CsvOuputComponent;
  let fixture: ComponentFixture<CsvOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvOuputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
