import { createAction, props } from '@ngrx/store'
import { Contact } from '../../models/contact'
import { ActionTypes } from '../store-models/action-types'

export const addContactAction = createAction(
  ActionTypes.ADD_CONTACT,
  props<{contact: Contact}>()
)
