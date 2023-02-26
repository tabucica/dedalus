import { contactsReducer } from './reducers';
import { ContactsState } from './store-models/contacts-state';
import { Contact } from '../models/contact';
import { loadAction, loadFailureAction, loadSuccessAction } from './actions/load-contacts.action';
import { setCurrentContactAction } from './actions/set-current-contact.action';
import { addContactAction } from './actions/add-contact.action';

describe('contactsReducer', () => {
  it('should return the initial state', () => {
    const initialState: ContactsState = {
        isLoading: false,
        error: '',
        currentContact: null,
        data: []
    }
    const action = { type: 'unknown', payload: null };
    const newState = contactsReducer(initialState, action);
    expect(newState).toBe(initialState);
  });

  it('should handle ActionTypes.LOAD', () => {
    const initialState: ContactsState = {
        isLoading: false,
        error: '',
        currentContact: null,
        data: []
    }
    const action =  loadAction();
    const newState = contactsReducer(initialState, action);
    expect(newState).toEqual({
        isLoading: true,
        error: '',
        currentContact: null,
        data: []
    });
  });
  it('should handle ActionTypes.LOAD_SUCCESS', () => {
    const initialState: ContactsState = {
        isLoading: true,
        error: '',
        currentContact: null,
        data: []
    }
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
    const action =  loadSuccessAction({contacts:mockContacts});
    const newState = contactsReducer(initialState, action);
    expect(newState).toEqual({
        isLoading: false,
        error: '',
        currentContact: null,
        data: mockContacts
    });
  });
  it('should handle ActionTypes.LOAD_FAILURE', () => {
    const initialState: ContactsState = {
        isLoading: true,
        error: '',
        currentContact: null,
        data: []
    }
    const mockError = 'simple error'
    const action =  loadFailureAction({error:mockError});
    const newState = contactsReducer(initialState, action);
    expect(newState).toEqual({
        isLoading: false,
        error: mockError,
        currentContact: null,
        data: []
    });
  });
  it('should handle ActionTypes.SET_CURRENT_CONTACT', () => {
    const initialState: ContactsState = {
        isLoading: false,
        error: '',
        currentContact: null,
        data: []
    }
    const mockContact: Contact = {
        "id": "1",
        "firstName": "John",
        "lastName": "JohnLast",
        "phone": "1",
        "email": "john@gmail.com",
        "address": "john 1"
    };
    const action = setCurrentContactAction({contact:mockContact});
    const newState = contactsReducer(initialState, action);
    expect(newState).toEqual({
        isLoading: false,
        error: '',
        currentContact: mockContact,
        data: []
    });
  });
  it('should handle ActionTypes.ADD_CONTACT', () => {
    const initialState: ContactsState = {
        isLoading: false,
        error: '',
        currentContact: null,
        data: []
    }
    const mockContact: Contact = {
        "id": "1",
        "firstName": "John",
        "lastName": "JohnLast",
        "phone": "1",
        "email": "john@gmail.com",
        "address": "john 1"
    };
    const action = addContactAction({contact:mockContact});
    const newState = contactsReducer(initialState, action);
    expect(newState).toEqual({
        isLoading: false,
        error: '',
        currentContact: null,
        data: [mockContact]
    });
  });
});
