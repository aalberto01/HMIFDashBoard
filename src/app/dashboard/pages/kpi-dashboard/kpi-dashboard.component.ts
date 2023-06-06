import { Component,  inject } from '@angular/core';
import { KpiService } from '../../services/kpi.service';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
})
export class KpiDashboardComponent  {
  private kpiService = inject(KpiService);

  public visitsXClient$ = this.kpiService.getVisitXClient();

  public sellsXClient$ = this.kpiService.getSellsXClient();
}
