import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CardComponent } from './components/card/card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { KpiDashboardComponent } from './pages/kpi-dashboard/kpi-dashboard.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

@NgModule({
  declarations: [ KpiDashboardComponent, CardComponent, ClientsListComponent, ClientsTableComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartComponent,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule { }
