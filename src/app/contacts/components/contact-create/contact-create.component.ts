import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const payload: Contact = {
      ...this.form.value,
      id:  Math.floor((Math.random() * 100)+100).toString(),
    }
    this.store.dispatch(addContactAction({contact: payload}));
  }
}
