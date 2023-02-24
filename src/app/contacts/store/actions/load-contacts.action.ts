import { createAction, props } from '@ngrx/store'
import { Contact } from '../../models/contact'
import { ActionTypes } from '../store-models/action-types'

export const loadAction = createAction(
  ActionTypes.LOAD,
)
export const loadSuccessAction = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{contacts: Contact[]}>()
)
export const loadFailureAction = createAction(
    ActionTypes.LOAD_FAILURE,
)
