// src/use-cases/fetchUser.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../entities/User';
import { fetchUserApi } from '../infrastructure/api';

export const fetchUser = createAsyncThunk<User, string>('user/fetchUser', async (userId: string) => {
  const user = await fetchUserApi(userId);
  return user;
});
