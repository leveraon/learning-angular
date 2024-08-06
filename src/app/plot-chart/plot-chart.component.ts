import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as Plot from '@observablehq/plot';

export const SELECTION = ['marks', 'bar', 'penguins', 'nation'];

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
          const aapl = await response.json();
          this.data = Plot.plot({
            width: 1200,
            inset: 6,
            y: { grid: true, label: 'Stock price ($)' },
            color: { type: 'threshold', range: ['red', 'green'] },
            marks: [
              Plot.ruleX(aapl, { x: 'Date', y1: 'Low', y2: 'High' }),
              Plot.ruleX(aapl, {
                x: 'Date',
                y1: 'Open',
                y2: 'Close',
                stroke: (d) => d.Close - d.Open,
                strokeWidth: 4,
              }),
              Plot.lineY(aapl, { x: 'Date', y: 'Close' }),
              Plot.tip(aapl, Plot.pointerX({ x: 'Date', y: 'Close' })),
            ],
          });
          this.div.append(this.data);
        });

        break;
      case 'bar':
        this.div.firstChild?.remove();
        fetch('assets/data/alphabet.json').then(async (response) => {
          const alphabet = await response.json();
          this.data = Plot.plot({
            width: 1500,
            label: null,
            y: {
              grid: true,
              label: 'Frequency (%)',
              percent: true,
            },
            marks: [
              Plot.barY(alphabet, { x: 'letter', y: 'frequency' }),
              Plot.text(alphabet, {
                x: 'letter',
                y: 'frequency',
                text: (d) => (d.frequency * 100).toFixed(1),
                dy: -6,
                lineAnchor: 'bottom',
              }),
              Plot.ruleY([0]),
            ],
          });
          this.div.append(this.data);
        });

        break;
      case 'penguins':
        this.div.firstChild?.remove();
        fetch('assets/data/penguins.json').then(async (response) => {
          const penguins = await response.json();
          this.data = Plot.plot({
            marginLeft: 60,
            marginRight: 60,
            label: null,
            x: { label: 'Frequency' },
            y: { padding: 0 },
            marks: [
              Plot.barX(penguins, {
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

      case 'nation':
        this.div.firstChild?.remove();
        Promise.all([
          fetch('assets/data/nation.json'),
          fetch('assets/data/statemesh.json'),
        ]).then(async ([nation, statemesh]) => {
          const nationData = await nation.json();
          const statemeshData = await statemesh.json();
          this.data = Plot.plot({
            width: 975,
            projection: 'identity',
            marks: [
              Plot.geo(nationData, { fill: '#eee' }),
              Plot.geo(statemeshData, { stroke: 'white' }),
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
