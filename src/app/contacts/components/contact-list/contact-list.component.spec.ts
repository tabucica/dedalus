import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { Contact } from '../../models/contact';
import { loadAction } from '../../store/actions/load-contacts.action';
import { setCurrentContactAction } from '../../store/actions/set-current-contact.action';
import { selectFeatureContactsData, selectFeatureCurrentContact } from '../../store/selectors';
import { ContactsState } from '../../store/store-models/contacts-state';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
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
        declarations: [ContactListComponent, ContactCreateComponent, ContactDetailComponent],
        imports: [ReactiveFormsModule],
        providers: [provideMockStore({ initialState })],
      }).compileComponents();
    });
    beforeEach(() => {
      fixture = TestBed.createComponent(ContactListComponent);
      store = TestBed.inject(MockStore);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize contacts$ observable on init', () => {
    const contacts$ = cold('-a|', { a: mockContacts });
    spyOn(store, 'select').and.returnValue(contacts$);
    component.ngOnInit();
    expect(component.contacts$).toBeObservable(contacts$);
    expect(store.select).toHaveBeenCalledWith(selectFeatureContactsData);
  });
  it('should initialize currentContact$ observable on init', () => {
    const currentContact$ = cold('-a|', { a: mockContact });
    spyOn(store, 'select').and.returnValue(currentContact$);
    component.ngOnInit();
    expect(component.currentContact$).toBeObservable(currentContact$);
    expect(store.select).toHaveBeenCalledWith(selectFeatureCurrentContact);
  });
  it('should dispatch loadAction on init', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadAction());
  });
  it('should dispatch setCurrentContactAction when onRowSelected is called', () => {
    spyOn(store, 'dispatch');
    component.onRowSelected(mockContact);
    expect(store.dispatch).toHaveBeenCalledWith(setCurrentContactAction({contact: mockContact}));
  });
});
