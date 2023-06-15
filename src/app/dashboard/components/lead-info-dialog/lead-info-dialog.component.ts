import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ILeadListTable } from '../../interfaces';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ContactoService } from '../../services/contacto.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-lead-info-dialog',
  templateUrl: './lead-info-dialog.component.html',
  styles: [
  ]
})
export class LeadInfoDialogComponent implements OnInit{

  public clientForm = this.fb.group({
    lead: [this.data.lead, [Validators.required]],
    status: [this.data.status, [Validators.required]],
    phone: [this.data.phone, [Validators.required]],
    email: [this.data.email, [Validators.required]],
    active: [this.data.active, [Validators.required]],
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<ILeadListTable>,
    @Inject(MAT_DIALOG_DATA) public data: ILeadListTable,
    private fb: FormBuilder,
    private contactService: ContactoService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  saveInfo(){

    const contact: ILeadListTable = {
      ...this.data,
      lead: this.clientForm.get('lead')?.value || this.data.lead ,
      status: this.clientForm.get('status')?.value || this.data.status ,
      phone: this.clientForm.get('phone')?.value || this.data.phone ,
      email: this.clientForm.get('email')?.value || this.data.email ,
      active: this.clientForm.get('active')?.value || false,
      
    }

    this.contactService.saveLead(contact);
  }
}
