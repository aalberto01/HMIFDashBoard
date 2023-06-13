import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { CardComponent } from './components/card/card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { KpiDashboardComponent } from './pages/kpi-dashboard/kpi-dashboard.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { LeadsPageComponent } from './pages/leads-page/leads-page.component';
import { LeadsTableComponent } from './components/leads-table/leads-table.component';
import { ContactInfoDialogComponent } from './components/contact-info-dialog/contact-info-dialog.component';
import { LeadInfoDialogComponent } from './components/lead-info-dialog/lead-info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ KpiDashboardComponent, CardComponent, ClientsListComponent, ClientsTableComponent, LeadsPageComponent, LeadsTableComponent, ContactInfoDialogComponent,LeadInfoDialogComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartComponent,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class DashboardModule { }
