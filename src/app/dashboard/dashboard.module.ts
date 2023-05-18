import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './components/card/card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { KpiDashboardComponent } from './pages/kpi-dashboard/kpi-dashboard.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [ KpiDashboardComponent, CardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartComponent,
    MatCardModule
  ]
})
export class DashboardModule { }
