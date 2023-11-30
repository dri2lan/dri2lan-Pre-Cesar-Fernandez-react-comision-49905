import React, { useEffect, useRef, useState } from 'react'
import { Data } from './Data'


export const Carrusel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

      if(imgNode){
        imgNode.scrollIntoView({
          behavior: "smooth"
        });

      }

  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if(direction === 'prev'){
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })

    } else {
      const isFirstSlide = currentIndex === Data.length - 1;

      if (isLastSlide){
        setCurrentIndex(curr => + 1);
      }
    }
  }
  return (
    <section>
    <div className="main-container">
    <div className="slider-container">
      <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
      <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
            <ul ref={listRef}>
              {
                Data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl} width={1400} height={240} className='sm:flex' />
                  </li>
                })
              }

            </ul>
        </div>

    </div>

</div>
</section>
  )
};



