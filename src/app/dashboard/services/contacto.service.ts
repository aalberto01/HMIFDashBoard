import { Injectable } from '@angular/core';
import { IClientListTable, ILeadListTable } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { fakerES_MX as faker} from '@faker-js/faker';
faker.seed(123)
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  
  private contacatList = this.initializeClientListTableElement();
  private leadList: ILeadListTable[] | null = [
    {id: '1', lead: 'Pedro', email: 'pedro@gmail.com', phone: '32331250', status: 'lead'},
    {id: '2', lead: 'Juan', email: 'juan@gmail.com', phone: '31283480', status: 'lead'},
    {id: '3', lead: 'Jaime', email: 'jaime@gmail.com', phone: '31703252', status: 'lead'},
    {id: '4', lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31353350', status: 'contactado'},
    {id: '5', lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31513350', status: 'contactado'},
    {id: '6', lead: 'Fernando Vega', email: 'vegafernando@gmail.com', phone: '31623350', status: 'contactado'},
  ]

  private _contactListBS: BehaviorSubject<IClientListTable[] | null> = new BehaviorSubject(this.contacatList);

  private _leadListTable: BehaviorSubject<ILeadListTable[] | null> = new BehaviorSubject(this.leadList);

  constructor() { }
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
}
