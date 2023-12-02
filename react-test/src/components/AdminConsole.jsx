import React, {useState} from "react";
import Card from "./card";
import contacts from '../data/data';

function AdminConsole(){
    let allContacts;
    const [filter,setFilter] = useState("");

    var findElement = contacts.filter((contact =>{
        return contact.name.toLowerCase().includes(filter.toLowerCase()); 
      }));

      function mapElements(elements){
        if(elements){
          return elements.map((contact)=>(
            <Card
            name = {contact.name} 
            img= {contact.picture} 
            phone= {contact.phone} 
            />
          ));
        }
        return undefined;
      }

      allContacts = mapElements(findElement);

      function filterListener(event) {
        console.log("I am listening to chanes in the field: " + event.target.value  );
      
        setFilter(event.target.value);
        console.log("The filter is: " + event.target.value)
        return;
      }

    
    return(
        <>
        <div>
            <input 
            type="text" 
            placeholder='Fiter' 
            name='filterTxt' 
            onChange={filterListener}  
            value={filter}/>
      </div>

      {allContacts && allContacts.length > 0 ? (
        allContacts) : (<h2>No results found</h2>)}
    </>    
    );
}

export default AdminConsole;



