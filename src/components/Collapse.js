import React, {useState} from 'react'
import {Api} from './Api'

const Collapse = () => {
  const [topics, setTopics] = useState([])
  const handleClick = (event) => {
    event.preventDefault()
    Api.getTopics().then(response => setTopics(response.data))
  }
  return (
    <>
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">List of topics</h5>
        <span className="text-muted">{topics.map(topic => (<div>{topic.title} key={topic.id}</div>))}</span>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                aria-label="Toggle navigation" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </>
  )
}

export default Collapse
