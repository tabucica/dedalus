import { createReducer, on, Action } from "@ngrx/store"
import { addContactAction } from "./actions/add-contact.action"
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions/load-contacts.action"
import { setCurrentContactAction } from "./actions/set-current-contact.action"
import { ContactsState } from "./store-models/contacts-state"

const initialState: ContactsState = {
    isLoading: false,
    error: '',
    currentContact: null,
    data: []
  }
export const contactsReducer = createReducer(
    initialState,
    on(
        loadAction,
        (state): ContactsState => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        loadSuccessAction,
        (state, action): ContactsState => ({
            ...state,
            isLoading: false,
            data: action.contacts,
        })
    ),
    on(
        loadFailureAction,
        (state, action): ContactsState => ({
            ...state,
            isLoading: false,
            error: action.error
        })
    ),
    on(
        setCurrentContactAction,
        (state, action): ContactsState => ({
            ...state,
            currentContact: action.contact,
        })
    ),
    on(
        addContactAction,
        (state, action): ContactsState => ({
            ...state,
            data: [...state.data, action.contact],
        })
    ),
)
export function reducers(state: ContactsState, action: Action) {
    return contactsReducer(state, action)
}