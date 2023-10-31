import React from 'react'
import options from '../icons';
import {BsThreeDots,BsPlus } from 'react-icons/bs';

function SectionHeading(props) {
  return (
    <div className='shead'>
        <div className='sfirst'>
            <div>{options.get(props.icon)}</div>
            <div>{props.title}</div>
            <div style={{color:'gray'}}>{props.count}</div>
        </div>
        <div className='ssecond'>
           <BsPlus style={{fontSize:'28px',color:'gray'}}/>
           <BsThreeDots style={{fontSize:'26px',color:'gray'}} />
        
        </div>
    </div>
  )
}

export default SectionHeading