import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiDashboardComponent } from './pages/kpi-dashboard/kpi-dashboard.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { LeadsPageComponent } from './pages/leads-page/leads-page.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'kpi', component: KpiDashboardComponent },
      { path: 'clientes', component: ClientsListComponent },
      { path: 'leads', component: LeadsPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
