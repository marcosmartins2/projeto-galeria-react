"use client"

import { useState } from "react";



import { photoList } from "@/data/photoList";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { PhotoItem } from "@/components/PhotoItem";
import { Modal } from "@/components/Modal";

const Page= ()=> {

  const [showModal,setShowModal] = useState(false);

  const [imageOfModal,setImageOfModal] = useState('');
 

  const openModal = (id:number)=>{

    const photo = photoList.find(item => item.id ===id);
    if (photo){
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = ()=>{
    setShowModal(false);
  }

  return (
    <div className="mx-2">

      <h1 className="text-center text-3xl font-bold my-10  text-white">Galeria Intergaláctica</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


      {photoList.map(item=> (
        <div className="">

          <PhotoItem key={item.id} photo={item} onClick={()=>openModal(item.id)}/>
        </div>
      ))}
      </section>


      {showModal && 

        <Modal image={imageOfModal} closeModal={closeModal}/>
      }

    </div>
  );
}

export default Page;
