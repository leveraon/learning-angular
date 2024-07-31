import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as Plot from '@observablehq/plot';

export const SELECTION = ['marks', 'bar', 'penguins'];

@Component({
  selector: 'app-plot-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './plot-chart.component.html',
  styleUrl: './plot-chart.component.scss',
})
export class PlotChartComponent implements OnInit {
  data: any;
  exampleList = SELECTION;
  selectedValue = '';
  div!: HTMLElement;

  ngOnInit(): void {
    this.div = document.querySelector('#plot') as HTMLElement;
  }

  async performAction(selectedValue: string) {
    switch (selectedValue) {
      case 'marks':
        this.div.firstChild?.remove();
        fetch('assets/data/aapl.json').then(async (response) => {
          this.data = Plot.plot({
            marks: [
              Plot.lineY(await response.json(), { x: 'Date', y: 'Close' }),
            ],
          });
          this.div.append(this.data);
        });

        break;
      case 'bar':
        this.div.firstChild?.remove();
        fetch('assets/data/alphabet.json').then(async (response) => {
          this.data = Plot.barY(await response.json(), {
            x: 'letter',
            y: 'frequency',
          }).plot();
          this.div.append(this.data);
        });

        break;
      case 'penguins':
        this.div.firstChild?.remove();
        fetch('assets/data/penguins.json').then(async (response) => {
          this.data = Plot.plot({
            marginLeft: 60,
            marginRight: 60,
            label: null,
            x: { label: 'Frequency' },
            y: { padding: 0 },
            marks: [
              Plot.barX(await response.json(), {
                fy: 'island',
                y: 'sex',
                x: 1,
                inset: 0.5,
              }),
              Plot.ruleX([0]),
            ],
          });
          this.div.append(this.data);
        });

        break;

      default:
        break;
    }
  }
}
