import { Component, OnInit, inject } from '@angular/core';
import { IClientListTable } from '../../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html'
})
export class ClientsListComponent implements OnInit{

  private contactService:ContactoService = inject( ContactoService )

  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.contactService.getContactList().subscribe( data => {
      if( !data ) return;

      this.dataSource = new MatTableDataSource(data)
    })
  }

}
