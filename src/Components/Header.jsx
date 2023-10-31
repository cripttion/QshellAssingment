import React,{useState } from 'react'
import { VscSettings } from 'react-icons/vsc';
import { AiOutlineDown} from 'react-icons/ai';
import {useDisplay} from '../HandleDisplayContext';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const{ grouping,setGroupValue,ordering,setOrderValue } = useDisplay();
    // const selectRef = useRef(null);
    const toggleSelect = () => {
       
      setIsOpen(!isOpen);
    };

  const handleGroupingChange = (event) => {
    setGroupValue(event.target.value);
    setOrderValue("");
    setIsOpen(!isOpen);
  };

  const handleOrderingChange = (event) => {
    setGroupValue("")
    setOrderValue(event.target.value);
    setIsOpen(!isOpen);
  };
   
  return (
    <div>
    <div style={{backgroundColor:'white',margin:'-5px',height:'70px'}}>

        <nav style={{marginLeft:'30px',paddingTop:'20px'}} >
        <button className="custom-select" onClick={toggleSelect}>
            <div className='selectMain'>
                <div><VscSettings /></div>
                <div>Display</div> 
                <div><AiOutlineDown /></div>   
            </div>  
           
        </button>

        </nav>
        </div>
        {isOpen&&
            <div className='selectOptions'>
                <div className='selectSecondary'>
                     <div>Grouping</div>
                     <div>
                     <select className='basedSelection' value={grouping} onChange={handleGroupingChange} >
                     <option value="" disabled>Grouping</option>

                        <option value="Status">Status</option>
                        <option value="Name">Name</option>

                        


                        </select>
                     </div>
                </div>

                <div className='selectSecondary'>
                     <div>Ordering</div>
                     <div>
                     <select className='basedSelection' value={ordering} onChange={handleOrderingChange} >
                        <option value="select" >Select option </option>
                        <option value="Priority">Priority</option>
                        
                        </select>

                     </div>
                </div>
            </div>
            }

    </div>
  )
}

export default Header