
const request = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [addressProject,setAddressProject] = useState('');
  const [comments,setComments] = useState('');


  const [err, setErr] = useState(null);
  const navigate=useNavigate();

  const sendRequestToinitiators=()=>{
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
  }
      await axios.post("http://localhost:3600/request",{ name:name,email:email,addressProject:addressProject,comments:comments},config)
  }
  return (

    <>
    
    <div>contact</div>

    <input type="name" placeholder="enter your name" onChange={e => setName(e.target.value)}></input>
      <br></br><br></br> 
    <input placeholder="enter your email" onChange={e => setEmail(e.target.value)}></input>
      <br></br><br></br>

    <input placeholder="enter your phone" onChange={e => setPhone(e.target.value)}></input>
      <br></br><br></br>
      <input placeholder="enter your address" onChange={e => setAddressProject(e.target.value)}></input>
      <br></br><br></br>
      <input placeholder="enter comments" onChange={e => setComments(e.target.value)}></input>
      <br></br><br></br>    
      

      <button onClick={sendRequestToinitiators}></button>

    </>



  )
}

export default contact