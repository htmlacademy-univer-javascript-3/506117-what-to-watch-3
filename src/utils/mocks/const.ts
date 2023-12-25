import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { createAPI } from '../../services/api/api';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
