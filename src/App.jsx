import React ,{useState} from 'react'
import './App.css'
import Header from './components/Header'


const App = () => {
  const [name ,setName]=useState("");
  const [email ,setEmail]=useState("");
const [data,setData] = useState([]);

  const addData=()=>{
    setData([...data,{name, email}])
    setName("");
    setEmail("");
  }
  const deletData=(index)=>{
   let arr=data;
   arr.splice(index,1);
   setData([...arr]);
  }
  return (
    <>
   <Header/>
    
    <div className="main">
   
   
        <input className="input" type="text"  placeholder='Type Here'
       value={name} onChange={(e)=>setName(e.target.value)}/>
       <input className="input" type="text"  placeholder='Type Here'
       value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button onClick={addData}>submit</button>
   
    </div>
    <div className="data">
      <div className="data_val">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Delet</h3>
      </div>
    </div>
    
    {
      data.map((elem,index)=>{
        return(
          <div className="data">
          <div className="data_val">
            <h3>{elem.name}</h3>
            <h3>{elem.email}</h3>
            <button className="btn2" onClick={deletData}>Delet</button>
          </div>
        </div>
        )
      })
    }
    </>
  )
}

export default App