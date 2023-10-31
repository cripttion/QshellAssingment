
import './App.css';
import React,{useState,useEffect} from 'react';
import Card from './Components/Card';
import Header from './Components/Header';
import SectionHeading from './Components/SectionHeading';
// import options from './icons'; // Import the options from options.js
import { useDisplay } from './HandleDisplayContext';
function App() {
  const { grouping,ordering} = useDisplay();
  const [data, setData] = useState({
    tickets: [],
    users: [],
  });
  const [groupedTickets, setGroupedTickets] = useState({});
  const[status,setSatausData] = useState(null);
  const[priority,setByPriority] = useState(null);
  

   function groupTicketsByUser(tickets, users) {
    const groupedTickets = {};

    tickets.forEach((ticket) => {
      const user = users.find((u) => u.id === ticket.userId);
      if (user) {
        if (!groupedTickets[user.name]) {
          groupedTickets[user.name] = [];
        }
        groupedTickets[user.name].push(ticket);
      }
    });

    return groupedTickets;
  }
  function groupTicketsByStatus(tickets) {
    const groupedData = {};
  
    // Iterate through the tickets
    tickets.forEach((ticket) => {
      const status = ticket.status;
  
      // Create an array for each status if it doesn't exist
      if (!groupedData[status]) {
        groupedData[status] = [];
      }
  
      // Add the ticket to the corresponding status group
      groupedData[status].push(ticket);
    });
  
    return groupedData;
  }
  function groupByFilter(tickets){
    const groupedData1 = {};
    tickets.forEach((ticket)=>{
      const priority = ticket.priority;

      if(!groupedData1[priority])
      {
        groupedData1[priority] = [];
      }
      groupedData1[priority].push(ticket);
    });
    return groupedData1;
  }
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setData(data); 

     

        const groupedTickets = groupTicketsByUser(data.tickets, data.users);
        setGroupedTickets(groupedTickets);
        const groupedStatus = groupTicketsByStatus(data.tickets);
        setSatausData(groupedStatus);
        const groupByFiltera = groupByFilter(data.tickets);
        setByPriority(groupByFiltera);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [grouping,ordering]);

 
  // console.log(groupedTickets);
  // console.log(status);
  // console.log(priority);
    
  //  console.log(ordering);
 
  return (
    <div className='appMain'>
      <Header />
      {grouping==='Status' &&
         <div className='AppSectionMain'>
        
          
         <div className='forBacklog'>
         <SectionHeading 
              icon='Backlog'
              title='Backlog'
              count={status && status['Backlog']?status['Backlog'].length:0}
            />
         {status && status['Backlog']&&status['Backlog'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}
            />
            </div>
        ))}
        </div>

         <div className='forTodo'>
         <SectionHeading 
              icon='Todo'
              title='Todo'
              count={status && status['Todo']?status['Todo'].length:0}
            />
         {status && status['Todo']&& status['Todo'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}
         </div>
         <div className='forinProgress'>
         <SectionHeading 
              icon='In progress'
              title='In progress'
              count={status && status['In progress']?status['In progress'].length:0}
            />
         {status && status['In progress']&&status['In progress'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}
         </div>
         <div className='forDone'>
         <SectionHeading 
              icon='Done'
              title='Done'
              count={status && status['Done']?status['Done'].length:0}
            />
         {status && status['Done']&& status['Done'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}

         </div>
         <div className='forCanceled'>
         <SectionHeading 
              icon='Canceled'
              title='canceled'
              count={status && status['Canceled']?status['Canceled'].length:0}
            />
         {status && status['Canceled']&& status['Canceled'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}

         </div>
       </div>
      // <h2>Hello</h2>
      } 

      {grouping==='Name' &&
       <div className='NameDivs'>
        {Object.keys(groupedTickets).map((gd) => (
        <div key={gd} className='nameitems' >
         <SectionHeading
          icon='profile'
          title={gd}
          count = {groupedTickets[gd].length}

         />
         
          {groupedTickets[gd].map((item) => (
             <div style={{marginTop:'10px'}}>
             <Card 
               id={item.id}
               title={item.title}
               profile={false}
               status={item.status}
               priority={item.priority}
               tag={item.tag[0]}
              />
              </div>
          ))}
        </div>
      ))}
      </div>
        }

      {ordering==='Priority'&&
       <div className='AppSectionMain'>
        
        {/* for nopriority   */}
       <div className='forBacklog'>
       <SectionHeading 
            icon={0}
            title='No priority'
            count={priority && priority[0]?priority[0].length:0}
          />
       {priority && priority[0]&&priority[0].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status={item.status}
            profile={true}

          />
          </div>
      ))}
      </div>
       {/* for urgenet */}
       <div className='forTodo'>
       <SectionHeading 
            icon={4}
            title='Urgent'
            count={priority && priority[4]?priority[4].length:0}
          />
       {priority && priority[4]&& priority[4].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status={item.status}
            profile={true}

          />
          </div>
      ))}
       </div>
       {/* for high */}
       <div className='forinProgress'>
       <SectionHeading 
            icon={3}
            title='High'
            count={priority && priority[3]?priority[3].length:0}
          />
       {priority && priority[3]&&priority[3].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status ={item.status}
            profile={true}

          />
          </div>
      ))}
       </div>
       {/* for medium */}
       <div className='forDone'>
       <SectionHeading 
            icon={2}
            title='Medium'
            count={priority && priority[2]?priority[2].length:0}
          />
       {priority && priority[2]&& priority[2].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
           status = {item.status}
           profile={true}

          />
          </div>
      ))}
        {/* for low */}
       </div>
       <div className='forCanceled'>
       <SectionHeading 
            icon={1}
            title='Low'
            count={priority && priority[1]?priority[1].length:0}
          />
       {priority && priority[1]&& priority[1].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status = {item.status}

          />
          </div>
      ))}

       </div>
     </div>
    // <h2>Hello</h2>
    } 
    
    </div>


  );
}

export default App;
