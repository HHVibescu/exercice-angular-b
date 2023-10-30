import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];

  onContactAdded(contact: Contact) {
    this.contacts.push(contact);
  }

  onContactDeleted(index: number) {
    this.contacts.splice(index, 1);
  }
}
