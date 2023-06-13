import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IClientListTable } from '../../interfaces/';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ContactInfoDialogComponent } from '../contact-info-dialog/contact-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']

})
export class ClientsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['contact', 'priority', 'phone', 'email', 'contactCounter', 'totalSells', 'action'];

  @Input({required:true}) dataSource!: MatTableDataSource<IClientListTable[] | null>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog( data: IClientListTable ): void {
    const dialogRef = this.dialog.open(ContactInfoDialogComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
