import { Injectable ,inject} from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ContactoService } from './contacto.service';

import type { IKpiPiChartProcessData, IKpiPiChartRawData } from '../interfaces/kpi.interface';
import { IClientListTable } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private contactService = inject(ContactoService);
  constructor() { }

  getSellsXClient(): Observable<IKpiPiChartProcessData | null>{
    return this.contactService.getContactList().pipe(
      map( this.transformClientSells ),
      map( this.transformDataForCharts )
    );
    
  }

  getVisitXClient(): Observable<IKpiPiChartProcessData | null> {
    return this.contactService.getContactList().pipe(
      map( this.transformClientContacts ),
      map( this.transformDataForCharts )
    );
  }
  transformClientSells(data:IClientListTable[] | null):IKpiPiChartRawData[] | null{
    if( !data || data.length === 0 ) return null;
    return data.map(el=> {return{label:el.contact,value:el.totalSells}as IKpiPiChartRawData });
  }
  transformClientContacts(data:IClientListTable[] | null):IKpiPiChartRawData[] | null{
    if( !data || data.length === 0 ) return null;
    return data.map(el=> {return{label:el.contact,value:el.contactCounter}as IKpiPiChartRawData });
  }
  transformDataForCharts( data: IKpiPiChartRawData[] | null): IKpiPiChartProcessData | null{
    if( !data || data.length === 0 ) return null;

    const newObs: IKpiPiChartProcessData = {
      labelList: [],
      valuesList: []
    }

    data.forEach( visitsData => {
      newObs.labelList.push(visitsData.label);
      newObs.valuesList.push(visitsData.value);
    })

    return newObs;
  }

}
