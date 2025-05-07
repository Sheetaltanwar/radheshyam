import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Park = () => {
  const { id } = useParams();
  const [park, setPark] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4004/auth/getparkId/${id}`)
      .then(res => setPark(res.data.result));
  }, [id]);

  if (!park) return <div>Loading...</div>;

  return (
    <div style={{width:'100vw',border:'1px solid black',marginTop:'71px'}}>
     <div style={{display:'flex',width:'100vw',height:'50%'}}>
        <div style={{padding:'30px',width:'50vw' ,height:'300px'}}>
             <h1 style={{fontSize:'40px'}}>{park.state}</h1>
             <h2 style={{fontWeight:'400'}}>{park.name}</h2>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50vw'}}>
         <img style={{width:'500px',height:'300px'}} src={park.image1}></img>
        </div>
     </div>


     <div style={{display:'flex'}} >
        <div style={{padding:'30px',width:'50vw'}}>
            <h2>Description</h2> <br/>
            <p style={{fontSize:'20px'}}>{park.des}</p>
        </div>
        <div style={{width:'50vw',padding:'30px',display:'flex',alignItems:'center',flexDirection:'column'}}>
             <h2>Map</h2><br/>  
             <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(park.name)}&output=embed`}
            width="500px"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Dynamic Map"
          ></iframe>
        </div>
     </div>
    </div>
  );
};

export default Park;
