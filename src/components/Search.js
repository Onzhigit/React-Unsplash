import React, { useState } from'react'
import Images from './Images'
import {Api} from './Api'

const Search = () => {

 const [search, setSearch] = useState([])
 const [result, setResult] = useState([])

 const handleChange = (event) => {
   setSearch(event.target.value)
 }
 const handleClick = (event) => {
   event.preventDefault()
   if (!search.length) {
     Api.getRandom().then (response => setResult(response.data))
   } else if (search.length) {
     Api.getImages(search).then (response => setResult(response.data.results))
   }
 }

  return (
    <>
    <nav className="navbar navbar-light bg-light">
     <div className="container-fluid">
      <form className="d-flex">
       <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              />
        <button className="btn btn-outline-success"
                type="submit"
                onClick={handleClick}
                >Search</button>
      </form>
     </div>
    </nav>
    <Images result={result} />
    </>
  )
}

export default Search
