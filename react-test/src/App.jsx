import './App.css';
import AdminConsole from './components/AdminConsole';
import contacts from './data/data';

function App() {
  const customStyle = {
    color: "blue",
    fontSize: "40px",
    border: "1px solid black",
  }

  const num= Math.floor(Math.random() * 10);
  const name = "Diego";
  const lname = "Montoya";
  const currentDate = new Date();

  if((num % 2) === 0){
    customStyle.background = "gray";
  } else { 
    customStyle.background = "yellow";
  }

  const img = "http://picsum.photos/200"
 // findElement.length > 0 ? mapElements(findElement) : mapElements (contacts);

  const nums = [1,2,3,4,5];
  var result = contacts.reduce((result, {age})=>{
    return result + age;
  },0);

  return (
    <div className="App">
      <h3>The result is {result}</h3>
      <h1 style={customStyle}>Hello world, I'm {name + " " + lname}</h1>
      <img  className= 'img' alt='Random' src= {img} />
    <AdminConsole/>
      <p className='footer'> <b>Copyrigth {currentDate.getFullYear()}</b></p>
    </div>
  );
}

export default App;
