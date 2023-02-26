import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from '../../models/contact';
import { addContactAction } from '../../store/actions/add-contact.action';
import { ContactsState } from '../../store/store-models/contacts-state';

import { ContactCreateComponent } from './contact-create.component';

describe('ContactCreateComponent', () => {
  let component: ContactCreateComponent;
  let fixture: ComponentFixture<ContactCreateComponent>;
  let store: MockStore;
  const mockContact: Contact = {
    "id": "1",
    "firstName": "John",
    "lastName": "JohnLast",
    "phone": "1",
    "email": "john@gmail.com",
    "address": "john 1"};
  const mockContacts: Contact[] = [{
      "id": "1",
      "firstName": "John",
      "lastName": "JohnLast",
      "phone": "1",
      "email": "john@gmail.com",
      "address": "john 1"
  },
  {
      "id": "2",
      "firstName": "John2",
      "lastName": "JohnLast2",
      "phone": "2",
      "email": "john2@gmail.com",
      "address": "john 2"
  },
  {
      "id": "3",
      "firstName": "John3",
      "lastName": "JohnLast3",
      "phone": "3",
      "email": "john3@gmail.com",
      "address": "john 3"
  }];
  const initialState: ContactsState = {
    isLoading: true,
    error: '',
    currentContact: mockContact,
    data: mockContacts};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCreateComponent ],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({ initialState })],
    })
    .compileComponents();
    fixture = TestBed.createComponent(ContactCreateComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form with empty fields on ngOnInit', () => {
    component.ngOnInit();
    expect(component.form.value).toEqual({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
    });
  });
  it('should dispatch an addContactAction when form is submitted', () => {
    const spy = spyOn(store, 'dispatch');
    const formValue = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      address: '123 Main St, Anytown USA',
    };
    component.form.setValue(formValue);
    component.onSubmit();
    const contactFromFormValue: Contact = {
      id: 'John_Doe',
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      address: '123 Main St, Anytown USA',
    };
    expect(spy).toHaveBeenCalledWith(addContactAction({contact: contactFromFormValue}));
  });
});
