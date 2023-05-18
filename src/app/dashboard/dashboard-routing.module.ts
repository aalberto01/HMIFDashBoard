import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiDashboardComponent } from './pages/kpi-dashboard/kpi-dashboard.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'kpi', component: KpiDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
