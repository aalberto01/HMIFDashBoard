import { Injectable } from '@angular/core';
import { IClientListTable, ILeadListTable } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { fakerES_MX as faker} from '@faker-js/faker';
// Se deja esta seed para que los resultados no varien.
faker.seed(123)
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  
  private contacatList = this.initializeClientListTableElement();
  private leadList: ILeadListTable[] | null = this.initializeLeadListTableElement();

  private _contactListBS: BehaviorSubject<IClientListTable[] | null> = new BehaviorSubject(this.contacatList);

  private _leadListTable: BehaviorSubject<ILeadListTable[] | null> = new BehaviorSubject(this.leadList);

  constructor() { }
  private createLeadListTableElement():ILeadListTable{
    return  {
      id: faker.number.int().toString(),
      lead: faker.person.fullName(),
      status: faker.helpers.arrayElement(['Lead', 'Contactado']),
      phone: faker.phone.number("3#######"),
      email: faker.internet.email(),
      active: faker.datatype.boolean(0.9),
    }
  }
  private createClientListTableElement():IClientListTable{
    return  {
      id: faker.number.int().toString(),
      contact: faker.person.fullName(),
      priority: faker.helpers.arrayElement(['Alta', 'Media', 'Baja']),
      phone: faker.phone.number("3#######"),
      email: faker.internet.email(),
      contactCounter: faker.number.int({min:1,max:20}),
      totalSells: faker.number.int({ min: 100, max: 200000 }),
      active: faker.datatype.boolean(0.9),
    }
  }
  initializeLeadListTableElement():ILeadListTable[] | null{
    let arr = [] as ILeadListTable[]
    for(let i = 0; i<10;i++){
      arr.push(this.createLeadListTableElement());
    }
      return arr;
  }
  
  initializeClientListTableElement():IClientListTable[] | null{
  let arr = [] as IClientListTable[]
  for(let i = 0; i<10;i++){
    arr.push(this.createClientListTableElement());
  }
  return arr;
  }
  getContactList(): Observable<IClientListTable[] | null>{
    return this._contactListBS;
  }

  getLeadList(): Observable<ILeadListTable[] | null>{
    return this._leadListTable;
  }
  saveContact(data: IClientListTable){
    if( !this.contacatList ) return;

    this.contacatList = this.contacatList?.map( contact => {
      if(data.id === contact.id){
        contact = { ...data }
      }
      return contact;
    }) as IClientListTable[] | null;
    this._contactListBS.next(this.contacatList);
  }
  saveLead(data: ILeadListTable){
    if( !this.leadList ) return;

    this.leadList = this.leadList?.map( contact => {
      if(data.id === contact.id){
        contact = { ...data }
      }
      return contact;
    }) as ILeadListTable[] | null;
    this._leadListTable.next(this.leadList);
  }
}
