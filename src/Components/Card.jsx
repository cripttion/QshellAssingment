import React from 'react'
import options from '../icons';
import { useDisplay } from '../HandleDisplayContext';
function Card(props) {
  const { ordering} = useDisplay();

  return (
    <div>
        <div className='cardMain'>
            {/* this dive for camname and profiel */}
            <div className='cardSectionOne'>
                <div style={{fontSize:"18px",color:'gray'}}><h4>{props.id}</h4></div>
               {props.profile&& <div className='cardProfile'>
                    <img alt='Profile' width={35} height={35} className='cardProfleImage' src='https://pulakportpolio.netlify.app/static/media/profileImg.09859a8ed6a8f49f9117.jpeg'/>
                    <div className='cardProfileStatus'></div>    
                </div>}
            </div>
            {/* this div is for titel */}
            <div style={{marginTop:'-30px',display:'flex',flexDirection:'row',gap:'15px',alignItems:'center'}}>
                {options.get(props.status)}
                <p>{props.title}</p></div>
            {/* this dive for featuresction */}
            <div className='cardSectionThird'>
            {ordering!=='Priority' &&<div className='cardPriorityStatus'>{options.get(props.priority)}</div>}
                {/* this is for feature one value */}
                <div className='tag'>
                 <div style={{width:'20px',height:'20px',backgroundColor:'lightgray',borderRadius:'50%'}}></div>
                    <div className='tage2'>
                        {props.tag}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card