import React from 'react'

const SubItem = ({sliderRef,modalOpenFilm,dataLocation}) => {
    
    if(dataLocation){
    return (
      <div ref={sliderRef} className="keen-slider">
          {React.Children.toArray(
          dataLocation.map(d =>(
          <div style={{transform: "translate3d(0px, 0px, 0px)", minWidth: "350px", maxWidth: "350px"}} className="keen-slider__slide" onClick={function(event){modalOpenFilm(true,d.id)}}><img src={d.imgSrc} className='img-slide'/></div>
          )))}
      </div>
    )
    }
}

export default SubItem