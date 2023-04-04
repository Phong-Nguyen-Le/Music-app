import data from '../../../../../data/data.json';
import { useState, useEffect } from 'react';
import './slider.css'



export default function Slider() {
   const DataImages = data.resources

  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => {
    if(slideIndex !== DataImages.length - 1){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === DataImages.length - 1){
        setSlideIndex(0)
    }
}

const prevSlide = () => {
    if(slideIndex !== 0){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 0){
        setSlideIndex(DataImages.length - 1)
    }
}

  useEffect(() => {
      let timer = setTimeout(() => {
          if(slideIndex === DataImages.length-1){
              setSlideIndex(0)
          } else {setSlideIndex(slideIndex+1)}
      }, 3000)
      return () => {
          clearTimeout(timer)
      }
  },[slideIndex])

  return (
    <>
      <div className='max-w-[1200px] h-[600px]'>
        {DataImages.map((item,index)=>{
            return (
                    <img className={`max-w-[1200px] h-[500px] object-cover absolute transition duration-300 ease-in-out ${slideIndex == index?'opacity-100 slide-left': 'opacity-0'}`} src={item.imageUrl}/>
            )
        })}
        <button onClick={prevSlide} className="absolute top-[50%]"><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={nextSlide} className='absolute top-[50%] right-0'><i className="fa-solid fa-chevron-right"></i></button>
        
      </div>
      
    </>
  )
}