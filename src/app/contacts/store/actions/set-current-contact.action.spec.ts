import { Contact } from '../../models/contact';
import { ActionTypes } from '../store-models/action-types'
import { setCurrentContactAction } from './set-current-contact.action';

describe('setCurrentContactAction()', () => {
  it('should create an action', () => {
    const contact: Contact = { id: '1', firstName: 'Test',  lastName: 'TestLast', phone: 'phone', email: 'email', address: 'address'};
    const action =  setCurrentContactAction({contact: contact});
    expect(action.type).toEqual(ActionTypes.SET_CURRENT_CONTACT);
    expect(action.contact).toEqual(contact);
  });
});