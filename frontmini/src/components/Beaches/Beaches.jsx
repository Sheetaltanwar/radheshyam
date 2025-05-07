import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Beaches = () => {
    const navigate=useNavigate();
    const images=[

        {id:'0',name:'Alappuzha Beach',state:'Kerala',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ic-0UJVwO6Gtc6yeVp6LgZkalotr2jhAIA&s',des:`Alappuzha Beach, also known as Alleppey Beach, is a popular tourist spot in Kerala, India, known for its long, sandy shores and vibrant coastal atmosphere. The beach features an old pier extending into the sea, offering scenic views of the Laccadive Sea. It's a popular spot for relaxation, beach activities, and witnessing sunsets`},
        {id:'1',name:'Calangute',state:'Goa',image:'https://s7ap1.scene7.com/is/image/incredibleindia/calangute-beach-goa-goa-1-attr-hero?qlt=82&ts=1726735056936',des:`A 7-kilometre-long beach, Calangute Beach, situated along the Goan coastline, is a vibrant and captivating destination that beckons travellers from across the globe. One of the most popular beaches, not just in Goa but across the country, the beach witnesses huge crowds and is often the first destination for travellers arriving in Goa. Known as the “Queen of Beaches,” Calangute offers a delightful blend of natural beauty, historical significance, and modern-day allure.`},
        {id:'2',name:'Marina Beach',state:'Chennai',image:'https://chennaitourism.travel/images/places-to-visit/headers/marina-beach-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg',des:`Get ready to dive into the extraordinary expense of one of the world's longest urban beaches! Spanning around 13 km along the Bay of Bengal, Marina Beach is known for its golden sand and shimmering water. A symphony of rhythmic waves beckons, lulling you into a state of calmness and encouraging you to bask in the peaceful surroundings. Whether you're seeking relaxation, recreation, or cultural immersion, Marina Beach has something for everyone.

        While Marina Beach is generally known for its beach fun, it has a treasure trove of history behind it. It offers you an opportunity to immerse yourself in the fascinating world of memorials and statues paying tribute to historical icons and political legends!`},
        {id:'3',name:'Juhu Beach',state:'Mumbai',image:'https://curlytales.com/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-19-at-16.55.28.jpeg',des:`Juhu Beach, sprawling along the Arabian Sea in the western part of Mumbai, is one of the most famous and visited beaches in India. Stretching for approximately six kilometres up to Versova, it is a major tourist attraction in the city. The wide expanse of the beach, coupled with its proximity to the upscale Juhu suburb, where numerous Bollywood celebrities reside, adds to its allure and makes it a coveted destination for locals and tourists alike.

        Renowned for its vibrant street food stalls, stunning sunset views, and occasional celebrity sighting, the beach is a hotspot for both locals and tourists. It’s not uncommon to see film shoots or stars jogging along the shoreline early in the morning. A visit to Juhu Beach offers a perfect blend of relaxation, culinary delights with local snacks, and a brush with Mumbai's glamorous side.`},
        {id:'4',name:'Varkala Beach',state:'Kerala',image:'https://www.keralatourism.org/images/newsbytes/large/varkala_papanasam_beach20240315082235_2211_1.jpg',des:`Varkala Beach, also known as Papanasam Beach, is a popular destination in Kerala, India, known for its unique cliff-side location on the Arabian Sea and its cultural and religious significance. It's the only location in southern Kerala where cliffs meet the sea. The beach is a geological monument, part of the "Varkala Formation," and features black sand containing thorium oxide. `},

        {id:'5',name:'Palolem Beach',state:'South Goa',image:'https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp',des:`Palolem Beach in Goa is a crescent-shaped beach known for its white sand, clear blue waters, and laid-back atmosphere. It's a popular destination for those seeking a peaceful and rejuvenating beach experience, often described as an "idyllic setting". The beach is surrounded by palm trees and offers a serene bay, making it a favorite spot for families and those looking for a tranquil vacation. `},
        {id:'6',name:'Puri Beach',state:'Odisha',image:'https://www.odishatourism.co/wp-content/uploads/2020/02/puri-sea-beach-odisha.jpg',des:`Puri Beach is the most popular beach of Odisha. It is the largest beach in India. This beach is also known as the Golden Beach. This famous beach destination in Odisha is the place where a number of pilgrims come to pay deference to Lord Jagannath. Puri Beach is considered to be safer as it does not face high tide and undercurrent very often.

The beach at Puri offers a unique opportunity to witness the striking sunrise and the sunset on the same beach. Like Chandrabhaga beach, there is a lighthouse at Puri beach which remains open from 4 pm to 6 pm. One can get a scenic view of the sea and the beach from the top of the lighthouse.`},
        {id:'7',name:'Kovalam Beach',state:'Kerala',image:'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fkovalam-beach-1728485231_0ea3611f4ad1209cd58a.webp&w=1920&q=75',des:`Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing. The leisure options at this beach are plenty and diverse.`},
    
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
       <div style={{width:'200px',margin:'33px'}}> <h2 style={{textAlign:'left',color:'white'}}>Beaches</h2></div>
      <div style={{width:'500px',marginRight:'67px'}}>  <h2 style={{textAlign:'right',fontWeight:'200',color:'white'}}>Top Beaches In India</h2></div>
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

export default Beaches