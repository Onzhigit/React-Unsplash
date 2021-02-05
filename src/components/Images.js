import React from 'react'

const Images = ({result}) => {
 return (
   <>
   {result.map(image => (<a href={image.urls.raw}><img src={image.urls.small} key={image.id}/></a>))}
   </>
 )
}

export default Images
