import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailComponent {
  @Input() contact: Contact;
}
