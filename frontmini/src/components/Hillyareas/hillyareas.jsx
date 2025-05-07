import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hillyareas = () => {
  const navigate = useNavigate();
  const [object, setObject] = useState({});
  const images = [
    {
      id: "0",
      name: "Shimla",
      state: "Himachal Pradesh",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1726730693575",
      des: `Shimla, the charming capital of Himachal Pradesh, is one of India’s most popular hill stations. Nestled at an altitude of around 2,200 meters in the majestic Himalayas, Shimla is renowned for its stunning natural beauty, pleasant climate, and colonial architecture. Once the summer capital of British India, the city still retains a rich legacy of British influence, seen in its historic buildings like the Viceregal Lodge, Christ Church, and the Gaiety Theatre.

The Mall Road, the Ridge, and Lakkar Bazaar are bustling hubs where visitors can shop, dine, and experience the vibrant culture. Surrounded by lush forests of pine, oak, and rhododendron, Shimla offers numerous scenic spots, from Jakhoo Hill to the peaceful Chadwick Falls. In winter, the town transforms into a snowy wonderland, attracting tourists for its winter sports and picturesque landscapes.

`,
    },
    {
      id: "1",
      name: "Manali",
      state: "Himachal Pradesh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2vDQ0WWhIXG3K1EoLNkGhrXrlHKKPG_9XA&s",
      des: `Manali, nestled in the Kullu Valley of Himachal Pradesh, is a picturesque hill station known for its breathtaking landscapes and adventure activities. Surrounded by snow-capped peaks, lush forests, and the gushing Beas River, Manali offers a perfect blend of tranquility and excitement. It is a gateway to the stunning Solang Valley and the high-altitude Rohtang Pass, both famous for skiing, paragliding, and trekking. The town's charming Old Manali area, with its cozy cafes and ancient temples like Hadimba Devi Temple, adds to its appeal. Manali is also a popular starting point for journeys to Leh and Spiti. Whether seeking a peaceful escape amidst nature or thrilling outdoor adventures, Manali promises a memorable experience for every traveler.`,
    },
    {
      id: "2",
      name: "Mussoorie",
      state: "Uttarakhand",
      image: "https://www.worldatlas.com/upload/1f/90/31/shutterstock-794720590.jpg",
      des: `Mussoorie, often called the "Queen of the Hills," is a charming hill station located in the Indian state of Uttarakhand, about 35 kilometers from Dehradun. Perched at an altitude of approximately 2,000 meters (6,600 feet) above sea level, it offers stunning panoramic views of the Himalayan ranges to the north and the sprawling Doon Valley to the south.

Established during the British colonial era in 1827, Mussoorie became a popular summer retreat for the British, and many of its colonial-era buildings, churches, and hotels still add a nostalgic charm to the town. The Mall Road, bustling with shops, cafes, and local vendors, remains the heart of Mussoorie’s social life.`,
    },
    {
      id: "3",
      name: "Nainital",
      state: "Uttarakhand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYOS-ixhgI7aWsc14ei_nr6Q5I14WcL-nTw&s",
      des: `Nainital is a beautiful hill station located in the Kumaon region of Uttarakhand, India, famous for its scenic lake, lush forests, and pleasant weather. Nestled at an altitude of around 2,084 meters (6,837 feet), it is often referred to as the "Lake District of India."

At the heart of Nainital lies the Naini Lake, a crescent-shaped freshwater body surrounded by rolling hills. Boating on the lake, whether by rowboat or paddleboat, is one of the most popular activities for visitors. Alongside the lake runs the lively Mall Road, lined with shops, cafes, and colonial-era buildings.`,
    },
    {
      id: "4",
      name: "Darjeeling",
      state: "West Bengal",
      image:
        "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Darjeeling-Travel-Guide-Cover-Photo-840x425.jpg",
      des: `Darjeeling, often called the "Queen of the Hills," is a picturesque hill station located in the state of West Bengal, India. Perched at an elevation of about 2,045 meters (6,710 feet), it is famed for its cool climate, rolling tea gardens, and spectacular views of the Himalayan mountains, especially the majestic Kanchenjunga, the world’s third-highest peak.

Darjeeling is world-renowned for its tea — Darjeeling Tea — known for its delicate flavor and aroma. The landscape is dotted with sprawling tea estates that are not only beautiful to look at but also offer immersive tea-tasting experiences.`,
    },
    {
      id: "5",
      name: "Ooty",
      state: "Tamil Nadu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-f-zfB9TsdKp7Kmz_GGi_Y4P4HCY5n9Gzgw&s",
      des: `Ooty, officially known as Udhagamandalam, is a famous hill station nestled in the Nilgiri Hills of Tamil Nadu, India. Sitting at an altitude of about 2,240 meters (7,350 feet), it is fondly called the "Queen of the Nilgiris." Known for its cool climate, rolling green hills, and charming colonial architecture, Ooty has been a beloved retreat since British times.

At the heart of Ooty is the Ooty Lake, where visitors can enjoy peaceful boat rides. The town is surrounded by lush tea gardens, pine forests, and flower gardens, creating a serene, postcard-perfect landscape.`,
    },
    {
      id: "6",
      name: "Coorg",
      state: "Karnatak",
      image:
        "https://s3.india.com/wp-content/uploads/2024/08/coorg-places-to-visit.jpg?impolicy=Medium_Widthonly&w=350&h=263",
      des: `Coorg, officially known as Kodagu, is a beautiful hill station located in the state of Karnataka, India. Often called the "Scotland of India," Coorg is famous for its rolling coffee plantations, dense forests, misty hills, and pleasant weather throughout the year.

Set at an altitude of around 900 to 1,200 meters (3,000–4,000 feet) above sea level, Coorg offers a refreshing blend of natural beauty, vibrant culture, and adventure. The area is rich in flora and fauna, and its lush landscapes are ideal for trekking, birdwatching, and nature walks.`,
    },

    {
      id: "7",
      name: "Gangtok",
      state: "Sikkim",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-2-attr-hero?qlt=82&ts=1727355185446",
      des: `Gangtok is a beautiful fusion of nature, culture, and modernity, making it one of India’s most unique hill stations. Tucked away in the eastern Himalayas, it stands at an elevation of about 1,650 meters, surrounded by lush green valleys, towering peaks, and swirling clouds.

The city is remarkably clean, organized, and vibrant, offering travelers a perfect blend of scenic beauty, spiritual peace, and urban comforts. Gangtok’s skyline is an enchanting mix of Buddhist monasteries, colorful prayer flags fluttering in the breeze, modern cafes, and well-maintained roads. On clear days, the views of the snow-capped Kanchenjunga, the world’s third-highest mountain, are absolutely breathtaking.`,
    },
  ];

  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(images);
    console.log("data1 is ", data1);
  }, []);

  useEffect(() => {
    console.log("2nd time", data1);
  }, [data1]);

  const handleClick = async (id) => {
    const object1 = images.filter((item) => item.id == id);
    navigate(`/individual/${id}`, { state: { item: object1 } });

    console.log("object 1 is ", object1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "1400px",
          height: "50px",
          backgroundColor: " #262a77",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "50px",
          paddingLeft: "50px",
          position: "relative",
          top: "70px",
          left: "-7px",
        }}
      >
        <div style={{ width: "200px", margin: "33px" }}>
          {" "}
          <h2 style={{ textAlign: "center", color: "white" }}>
            Hilly Areas
          </h2>
        </div>
        <div style={{ width: "500px", marginRight: "67px" }}>
          {" "}
          <h2 style={{ textAlign: "right", fontWeight: "200", color: "white" }}>
            Top Hill Stations In India
          </h2>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "875px",
          position: "relative",
          top: "68px",
        }}
      >
        {data1.map((item, index) => (
          <div
            className="listComponents"
            onClick={() => handleClick(index)}
            key={item.id}
          >
            <div style={{ width: "50px" }}>
              <h2>{index + 1}.</h2>
            </div>
            <div style={{ width: "400px" }}>
              {" "}
              <h2 style={{ color: "rgb(8, 8, 51);" }}>{item.state}</h2>
            </div>
            <div style={{ width: "400px" }}>
              <h2 style={{ fontWeight: "300", color: "rgb(8, 8, 51);" }}>
                {item.name}
              </h2>
            </div>
            <img style={{ height: "80px", width: "80px" }} src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hillyareas;
