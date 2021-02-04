import React from 'react'

const Images = ({result}) => {
 return (
   <>
   {result.map(image => (<img src={image.urls.small} key={image.id}/>))}
   </>
 )
}

export default Images
