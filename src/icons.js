import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {BsThreeDots,  BsCircle,BsCircleHalf,BsXCircleFill, BsFillExclamationSquareFill } from 'react-icons/bs';
import { BiSignal3,BiSignal4,BiSignal5} from 'react-icons/bi';
const CardProfile = () => {
  return (
    <div className='cardProfile'>
      <img
        width={40}
        height={40}
        className='cardProfleImage'
        src='https://pulakportpolio.netlify.app/static/media/profileImg.09859a8ed6a8f49f9117.jpeg'
        alt='Profile'
      />
      <div className='cardProfileStatus'></div>
    </div>
  );
};

const todoStyle = {
  fontSize: '20px',
  color: 'gray',
};

const inprogressStyle = {
  fontSize: '20px',
  color: 'yellow',
};
const doneStyle = {
    fontSize: '20px',
    color: 'blue',
  };
  const cancelStyle = {
    fontSize: '20px',
    color: 'gray',
  };
const noPriorityStyle={
    fontSize:'20px',
    color:'lightgray',
}
const lowStyle={
    fontSize:'20px',
    color:'gray',
}
const urgentStyle={
    fontSize:'20px',
    color:'red',
}
const options = new Map([
  ['profile',<CardProfile />],
  ['Backlog', <BsThreeDots style={todoStyle} />],
  ['Todo', <BsCircle style={todoStyle} />],
  ['In progress', <BsCircleHalf style={inprogressStyle} />],
  ['Done', <FaCheckCircle style={doneStyle} />],
  ['Canceled', <BsXCircleFill style={cancelStyle} />],
  [0, <BsThreeDots style={noPriorityStyle} />],
  [1, <BiSignal3 style={lowStyle} />],
  [2, <BiSignal4 style={lowStyle} />],
  [3, <BiSignal5 style={lowStyle} />],
  [4, <BsFillExclamationSquareFill style={urgentStyle} />],



]);

export default options;
