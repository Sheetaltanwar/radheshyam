
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SpiritualPlaces = () => {

  const navigate=useNavigate();
  const [object,setObject]=useState({})
  const images=[
    {id:0,name:'Amarnath Temple',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ikBSqfCc6X6ebxk4XIa1sq6b5ebKykR5wA&s',state:'Jammu Kashmir',des:'The Amarnath Cave Temple is a significant Hindu shrine in the Himalayas, revered for the naturally formed ice stalagmite that resembles the Hindu deity Shivas lingam. This ice formation waxes and wanes with the phases of the moon. The cave is also believed to be where Lord Shiva revealed the secret of immortality to his consort Parvati'},
    {id:1,name:'Kedarnath Temple',image:'https://templeyatri.in/wp-content/uploads/2024/07/kedarnath-4-1.webp',state:'Uttarakhand',des:'The Kedarnath Temple is a sacred Hindu shrine dedicated to Lord Shiva, located in the Garhwal Himalayan range of Uttarakhand, India. It s one of the 12 Jyotirlingas and a site in the Char Dham pilgrimage. The temple houses a Shiva Lingam in an unusual pyramidal shape and is built of large rocks on a rectangular platform'},
    {id:2,name:'Konark Sun Temple',image:'https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg',state:'Odisha',des:`The Konark Sun Temple, also known as the "Black Pagoda", is a marvel of Indian temple architecture. Its design is inspired by the chariot of the Sun God, Surya, with twelve intricately carved stone wheels and seven horses. The temple complex includes the main sanctum, a tower that once housed the deity (now collapsed), the audience hall (Jagamohana), the dance hall (Natamandir), and the dining hall (Bhoga-Mandap). The Jagamohana, the largest remaining structure, is a testament to the architectural grandeur of the temple. 
The temple's exterior is adorned with elaborate carvings depicting various aspects of life, including animal figures, human figures, and scenes from mythology. The intricate details, particularly on the wheels and pillars, showcase the craftsmanship of the time. Despite centuries of neglect and damage, the Konark Sun Temple remains a significant landmark and a testament to the artistic and architectural achievements of the Eastern Ganga dynasty. `},
    {id:3,name:'Akshardham Mandir',image:'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg',state:'New Delhi',des:'The Akshardham Temple, or Akshardham Mandir, is a grand structure dedicated to Bhagwan Swaminarayan, a prominent figure in the Swaminarayan faith. The temple is a marvel of Indian architecture, showcasing the beauty and spirituality of ancient art and culture. It is adorned with intricate carvings, 234 ornately carved pillars, and nine domes, all crafted from pink sandstone and Italian marble. The temples design is based on the Māru-Gurjara architectural style and incorporates traditional Hindu guidelines (Shilpa shastras) to ensure a long lifespan. The main murti of Bhagwan Swaminarayan, made of pañcadhātu (five metals), is a focal point, surrounded by images of other deities. The temple also features the Gajendra Pith, a plinth with 148 life-sized elephants, symbolizing the elephants importance in Hindu culture'},
    {id:4,name:'Golden Temple',image:'https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-hero?qlt=82&ts=1726662069037',state:'Punjab',des:'The Golden Temple, also known as Sri Harmandir Sahib, is a revered Gurdwara in Amritsar, Punjab, India, and the holiest shrine in Sikhism. It stands as a symbol of religious unity, offering solace and spiritual guidance to visitors of all faiths. The temples architecture blends Indo-Islamic and Hindu styles, with its golden dome and marble construction reflecting a fusion of cultures. It is surrounded by a sacred pool called the Sarovar, further enhancing its serene and spiritual atmosphere'},
    {id:5,name:'Jagganath Temple',image:'https://img.etimg.com/thumb/msid-110303195,width-640,height-480,imgsize-104310,resizemode-4/home-to-jagannath.jpg',state:'Odisha',des:`The Shree Jagannath Temple in Puri, Odisha, is a significant Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu, along with his siblings Balabhadra and Subhadra. Built in the Kalinga architectural style, the temple stands on a raised platform and is enclosed by a high wall with four gates. It's one of the four Char Dham pilgrimage sites for Hindus. `},
    {id:6,name:'Prem Mandir',image:'https://thetraveladda.com/wp-content/uploads/2025/02/vrindavan-1.webp',state:'Uttar Pradesh',des:`Prem Mandir, or the Temple of Divine Love, is a Hindu temple located in Vrindavan, Uttar Pradesh, India. It is dedicated to Radha Krishna and Sita Ram. The temple complex spans 55 acres and was established under the guidance of Jagadguru Shri Kripalu Ji Maharaj. 
Description:
Prem Mandir is renowned for its intricate carvings, stunning architecture, and serene ambiance. The main structure is built with white marble and adorned with sculptures and depictions of Lord Krishna's life and the lives of his devotees. The complex also features fountains, gardens, and light and sound shows. 
`},
    {id:7,name:'Somnath Temple',image:'https://vidzone.in/wp-content/uploads/2025/04/Somnath_Temple.webp',state:'Gujarat',des:'The Somnath Temple is a grand structure built in Chaulukya style of Hindu temple architecture, featuring intricate carvings and a towering Shikhara (spire). The temple is a combination of two concentric circles, each with small temples dedicated to Lord Shiva. It is believed that the first temple at this site was built by the Moon god Soma. The temple is situated on the Arabian Sea coast, at the Triveni Sangam (confluence of three rivers). '},
   
  ]

  const [data1,setData1]=useState([])

  useEffect(()=>{
   setData1(images)
   console.log("data1 is ",data1)
  },[])

  useEffect(()=>{
    console.log("2nd time",data1)
  },[data1])

  const handleClick=async(id)=>{ 
       const object1=images.filter((item)=>item.id==id)
       navigate(`/individual/${id}`,{state:{item:object1}}) 
       console.log("object 1 is ",object1)   
  }

  return (
    <div>
        
        <div style={{display:'flex',width:'1400px',height:'50px', backgroundColor:' #262a77',justifyContent:'space-between',alignItems:'center',paddingRight:'50px',paddingLeft:'50px' ,position:'relative',top:'70px',left:'-7px'}}>
       <div style={{width:'200px',margin:'33px'}}> <h2 style={{textAlign:'center' ,color:'white'}}>Spiritual Places</h2></div>
      <div style={{width:'500px',marginRight:'67px'}}>  <h2 style={{textAlign:'right',fontWeight:'200',color:'white'}}>Top Temples In India</h2></div>
    </div>
    <div style={{width:'100vw',height:'875px',position:'relative',top:'68px'}}>
      {data1.map((item,index)=>(
        <div className='listComponents' onClick={()=>handleClick(index)} key={item.id}>
            <div style={{width:"50px"}}><h2>{index+1}.</h2></div>
            <div style={{width:'400px'}}> <h2 style={{color:'rgb(8, 8, 51);'}}>{item.state}</h2></div>
            <div style={{width:'400px'}} ><h2 style={{fontWeight:'300',color:'rgb(8, 8, 51);'}}>{item.name}</h2></div>
            <img style={{height:'80px',width:'80px'}} src={item.image}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SpiritualPlaces