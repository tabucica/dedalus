import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/store-models/app-state';
import { ContactsState } from './store-models/contacts-state';

export const selectFeature = (state: AppState) => state.contacts;

export const selectFeatureContactsData = createSelector(
  selectFeature,
  (state: ContactsState) => state.data
);
export const selectFeatureCurrentContact = createSelector(
    selectFeature,
    (state: ContactsState) => state.currentContact
  );