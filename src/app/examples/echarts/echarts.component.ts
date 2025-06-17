import { Component, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import * as echarts from 'echarts/core';
import {
  NgxEchartsDirective,
  provideEchartsCore
} from 'ngx-echarts';

import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-echarts',
  imports: [NgxEchartsDirective],
  templateUrl: './echarts.component.html',
  styleUrl: './echarts.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class EchartsComponent implements OnInit {
  options!: EChartsCoreOption;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}
