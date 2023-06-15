import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IClientListTable, ILeadListTable } from '../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { LeadInfoDialogComponent } from '../lead-info-dialog/lead-info-dialog.component';

@Component({
  selector: 'app-leads-table',
  templateUrl: './leads-table.component.html',
  styles: [
  ]
})
export class LeadsTableComponent {
  displayedColumns: string[] = ['lead', 'status', 'phone', 'email', 'action'];

  @Input({required:true}) dataSource!: MatTableDataSource<ILeadListTable[] | null>;

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

  openDialog(data: ILeadListTable): void {
    const dialogRef = this.dialog.open(LeadInfoDialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
