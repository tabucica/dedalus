import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store-models/app-state';
import { Contact } from '../../models/contact';
import { addContactAction } from '../../store/actions/add-contact.action';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCreateComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: [''],
      address: [''],
    })
  }

  onSubmit(): void {
    const newContact: Contact = {
      ...this.form.value,
      id:  this.form.value['firstName'] + '_' + this.form.value['lastName'],
    }
    this.store.dispatch(addContactAction({contact: newContact}));
  }
}
