import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup'

import JoinRoomStyles from './JoinRoomStyles';


// const Schema = yup.object().shape({
//   roomId: yup.number().required(),
// });

const JoinRoom = () => {
  const classes = JoinRoomStyles();
  // const { register, handleSubmit, errors } = useForm({
  //   validationSchema: Schema,
  // });

  const navigate = useNavigate();
  const connectToRoom = ({ roomId }: {roomId: string}) => {
    navigate(`/room/${roomId}/join`);
  };

  return (
    <>
      
    </>
  );
};

export default JoinRoom;
