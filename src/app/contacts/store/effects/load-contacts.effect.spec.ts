import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactsService } from '../../services/contacts.service';
import { LoadContactsEffect } from './load-contacts.effect';
import { loadAction, loadSuccessAction, loadFailureAction } from '../actions/load-contacts.action';
import { Contact } from '../../models/contact';

describe('LoadContactsEffects()', () => {
  let actions$: Observable<any>;
  let effects: LoadContactsEffect;
  let contactsService: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoadContactsEffect,
        ContactsService,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(LoadContactsEffect);
    contactsService = TestBed.inject(ContactsService);
  });

  it('should dispatch loadSuccessAction() on success', () => {
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
    const action = loadAction();
    const successAction = loadSuccessAction({contacts:mockContacts});

    spyOn(contactsService, 'loadContacts').and.returnValue(of(mockContacts));
    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: successAction });
    expect(effects.getCurrentUser$).toBeObservable(expected);
  });

  it('should dispatch loadFailureAction() on error', () => {
    const error = 'Error loading data';
    const action = loadAction();
    const failureAction = loadFailureAction({error:error});

    spyOn(contactsService, 'loadContacts').and.returnValue(throwError(error));
    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: failureAction });
    expect(effects.getCurrentUser$).toBeObservable(expected);
  });
});
