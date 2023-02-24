import { createAction, props } from '@ngrx/store'
import { Contact } from '../../models/contact'
import { ActionTypes } from '../store-models/action-types'

export const setCurrentContactAction = createAction(
  ActionTypes.SET_CURRENT_CONTACT,
  props<{contact: Contact}>()
)
