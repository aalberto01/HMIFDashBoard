import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-leads-page',
  templateUrl: './leads-page.component.html',
  styles: [
  ]
})
export class LeadsPageComponent {

  private contactService:ContactoService = inject( ContactoService )

  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.contactService.getLeadList().subscribe( data => {
      if( !data ) return;

      this.dataSource = new MatTableDataSource(data)
    })
  }
}
