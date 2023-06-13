import { Injectable } from '@angular/core';
import { IClientListTable, ILeadListTable } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contacatList: IClientListTable[] | null = [
    {contact: 'Pedro', email: 'pedro@gmail.com', phone: '32331250', contactCounter: 1, priority: 'Alta', totalSells: 1_000},
    {contact: 'Juan', email: 'juan@gmail.com', phone: '31283480', contactCounter: 1, priority: 'Alta', totalSells: 2_000},
    {contact: 'Jaime', email: 'jaime@gmail.com', phone: '31703252', contactCounter: 1, priority: 'Alta', totalSells: 5_000},
    {contact: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31353350', contactCounter: 1, priority: 'Alta', totalSells: 10_000},
    {contact: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31513350', contactCounter: 1, priority: 'Alta', totalSells: 10_000},
    {contact: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31623350', contactCounter: 1, priority: 'Alta', totalSells: 10_000},
  ]

  private leadList: ILeadListTable[] | null = [
    {lead: 'Pedro', email: 'pedro@gmail.com', phone: '32331250', status: 'lead'},
    {lead: 'Juan', email: 'juan@gmail.com', phone: '31283480', status: 'lead'},
    {lead: 'Jaime', email: 'jaime@gmail.com', phone: '31703252', status: 'lead'},
    {lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31353350', status: 'contactado'},
    {lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31513350', status: 'contactado'},
    {lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31623350', status: 'contactado'},
  ]

  private _contactListBS: BehaviorSubject<IClientListTable[] | null> = new BehaviorSubject(this.contacatList);

  private _leadListTable: BehaviorSubject<ILeadListTable[] | null> = new BehaviorSubject(this.leadList);

  constructor() { }

  getContactList(): Observable<IClientListTable[] | null>{
    return this._contactListBS;
  }

  getLeadList(): Observable<ILeadListTable[] | null>{
    return this._leadListTable;
  }
}
