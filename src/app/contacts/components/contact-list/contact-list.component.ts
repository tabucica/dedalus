import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store-models/app-state';
import { Contact } from '../../models/contact';
import { loadAction } from '../../store/actions/load-contacts.action';
import { setCurrentContactAction } from '../../store/actions/set-current-contact.action';
import { selectFeatureContactsData, selectFeatureCurrentContact } from '../../store/selectors';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  columns: Array<string> = ['First name', 'Last name'];
  currentContact$: Observable<Contact | null>;
  constructor(private store: Store<AppState>){
  }
  ngOnInit(): void {
    this.contacts$ = this.store.select(selectFeatureContactsData)
    this.currentContact$ = this.store.select(selectFeatureCurrentContact)
    this.store.dispatch(loadAction());
  }
  onRowSelected(contact: Contact):void {
    this.store.dispatch(setCurrentContactAction({contact: contact}))
  }
}
