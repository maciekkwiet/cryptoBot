import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import CreateNewRoomStyles from './CreateNewRoomStyles';

const CreateNewRoom = () => {
  const navigate = useNavigate();
  const classes = CreateNewRoomStyles();

  const getRoomNumber = async () => {
    try {
      const currentRoom = await axios.post('/api/session');
      navigate("/about")
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>

    </>
  );
};

export default CreateNewRoom;
