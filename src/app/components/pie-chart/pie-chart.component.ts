import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule ],
  templateUrl: './pie-chart.component.html',
  styles: [
  ]
})
export class PieChartComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        fullSize: true,
        align: 'center',
        labels:{
          textAlign: 'left',
          boxWidth: 20,
          color: 'white'
        }
      }
    }
  };
  public pieChartLabels = [ 'Barena', 'Salva', 'Miller' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
