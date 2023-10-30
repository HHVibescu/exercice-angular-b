import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Output() contactAdded = new EventEmitter<Contact>();
  contact = new Contact('', '', 0, '', '');

  onSubmit() {
    this.contactAdded.emit(this.contact);
    this.contact = new Contact('', '', 0, '', '');
  }
}
