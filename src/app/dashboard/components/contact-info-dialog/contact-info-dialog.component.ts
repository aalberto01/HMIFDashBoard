import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClientListTable } from '../../interfaces';
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
  selector: 'app-contact-info-dialog',
  templateUrl: './contact-info-dialog.component.html',
  styles: [
  ]
})
export class ContactInfoDialogComponent implements OnInit{

  public clientForm = this.fb.group({
    contact: [this.data.contact, [Validators.required]],
    priority: [this.data.priority, [Validators.required]],
    phone: [this.data.phone, [Validators.required]],
    email: [this.data.email],
    contactCounter: [this.data.contactCounter, [Validators.required]],
    active: [this.data.active, [Validators.required]],
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<IClientListTable>,
    @Inject(MAT_DIALOG_DATA) public data: IClientListTable,
    private fb: FormBuilder,
    private contactService: ContactoService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  saveInfo(){

    const contact: IClientListTable = {
      ...this.data,
      active: this.clientForm.get('active')?.value || false,
      contact: this.clientForm.get('contact')?.value || this.data.contact,
      email: this.clientForm.get('email')?.value || this.data.email,
      phone: this.clientForm.get('phone')?.value || this.data.phone,
      priority: this.clientForm.get('priority')?.value || this.data.priority,
      contactCounter: this.clientForm.get('contactCounter')?.value || this.data.contactCounter
    }

    this.contactService.saveContact(contact);
  }
}
