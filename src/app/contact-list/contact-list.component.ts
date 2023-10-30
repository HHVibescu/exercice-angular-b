import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() contactDeleted = new EventEmitter<number>();

  onDelete(index: number) {
    this.contactDeleted.emit(index);
  }
}
