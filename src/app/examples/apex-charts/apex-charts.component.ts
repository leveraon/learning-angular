import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip,
} from 'ng-apexcharts';
import { candleData } from './stock/candle';
import { seriesData } from './stock/series';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-apex-charts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgApexchartsModule],
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.scss',
})
export class ApexChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'candle',
          data: candleData,
        },
      ],
      chart: {
        height: 680,
        type: 'candlestick',
      },
      title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left',
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (val) {
            return moment(val).format('MMM DD HH mm');
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  }
}
