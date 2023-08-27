import React from "react";
import Card from "./Card";

const Testimonlas = () => {
  const data = [
    {
      name: "Gordon Norman",
      title:
        "very happy with my air duct cleaning! The tech was fabulous! He communicated everythin",
      images: "/client-3.jpg",
    },
    {
      name: "Eleanor Crisp",
      title:
        "very happy with my air duct cleaning! The tech was fabulous! He communicated everything",
      images: "/client-2.jpg",
    },
    {
      name: "Emma Zacks",
      title:
        "Amazing service from the time I called them to the time they finished the job.",
      images: "/client-1.jpg",
    },
   

   
    
    
  ];
 


  return (
    <div className="w-full h-full mt-20">
      <h2
        className="main-title text-4xl mt-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Testimonials
      </h2>
      <div className="flex flex-col gap-2 items-center justify-start bg-gray-900 h-screen">
        <h2 className="text-4xl font bold  text-blue-300 text-center">
          Happy with Customers & Clients
        </h2>
        <p className="text-gray-300 text-center p-2 mt-6">
          Our priority is your safety and ensuring that your Indoor
          <br /> Air Quality is up to standard. Whether you are noticing
          <br /> issues in the summer months or during the cold, winter <br />{" "}
          months, contact us right away if you think that your <br /> system is
          not working to the best of its ability.
        </p>
        <div className="flex flex-col gap-3  overflow-x-hidden mt-7">
        {data.map((data, index) => {
            return (
              <Card key={index} title={data.title} name={data.name} images={data.images}/>
            );
            
          })}  


          
         
        </div>
     
                

      </div>
    </div>
  );
};
export default Testimonlas;
