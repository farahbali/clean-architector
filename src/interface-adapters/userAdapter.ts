// src/interface-adapters/userAdapter.ts

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../infrastructure/rootReducer';

export const selectUser = createSelector(
  (state: RootState) => state.user.user,
  (user) => user,
);
