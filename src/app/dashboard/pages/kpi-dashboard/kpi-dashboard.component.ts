import { Component,  inject } from '@angular/core';
import { KpiService } from '../../services/kpi.service';
import { ContactoService } from '../../services/contacto.service';
import { IClientListTable } from '../../interfaces/';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
})
export class KpiDashboardComponent  {
  private kpiService = inject(KpiService);
  private contactService = inject(ContactoService);
  clientsList!: IClientListTable[];
  ngOnInit(): void {
    this.contactService.getContactList().subscribe( data => {
      if( !data ) return;

      this.clientsList =  [...data]
    })
  }

  public visitsXClient$ = this.kpiService.getVisitXClient();

  public sellsXClient$ = this.kpiService.getSellsXClient();
  
  countAllClients():number{
    return this.clientsList.length
  }
  countActiveClients():number{
    return this.clientsList.filter(cl=> cl.active).length
  }
}
