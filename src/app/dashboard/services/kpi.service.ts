import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import type { IKpiPiChartProcessData, IKpiPiChartRawData } from '../interfaces/kpi.interface';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  private sellsxClient: IKpiPiChartRawData[] | null= [
    { label: 'Pedro', value: 1_000 },
    { label: 'Juan', value: 2_000 },
    { label: 'Jaime', value: 5_000 },
  ];

  private visitsxClient: IKpiPiChartRawData[] | null= [
    { label: 'Pedro', value: 1 },
    { label: 'Juan', value: 3 },
    { label: 'Jaime', value: 5 },
  ];

  private _sellsxClientBS: BehaviorSubject<IKpiPiChartRawData[] | null> = new BehaviorSubject(this.sellsxClient);
  private _visitsxClientBS: BehaviorSubject<IKpiPiChartRawData[] | null> = new BehaviorSubject(this.visitsxClient);

  constructor() { }

  getSellsXClient(): Observable<IKpiPiChartProcessData | null>{
    return this._sellsxClientBS.pipe(
      map( this.transformDataForCharts )
    );;
  }

  getVisitXClient(): Observable<IKpiPiChartProcessData | null> {
    return this._visitsxClientBS.pipe(
      map( this.transformDataForCharts )
    );
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
