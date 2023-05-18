import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styles: [
  ]
})
export class KpiDashboardComponent {

  // public dataSet1 = [2000, 1000, 5000]
  public dataSet1 = [ {
    data: [2000, 1000, 5000]
  }];
  public labels1 = ['Pedro', 'Juan', 'Jaime']

  // public dataSet2 = [3, 1, 5]
  public dataSet2 = [ {
    data: [3, 1, 5]
  }];
  public labels2 = ['Pedro', 'Juan', 'Jaime']

}
