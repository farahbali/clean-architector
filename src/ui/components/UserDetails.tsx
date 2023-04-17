// src/ui-components/UserDetails.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../use-cases/fetchUser';
import { selectUser } from '../interface-adapters/userAdapter';

interface Props {
  userId: string;
}

const UserDetails: React.FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetails;
