import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

const SmurfForm = ({ postSmurf }) => {
  const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: "",
    height: ""
  })

  const handleChange = e => {
    setSmurfForm({ ...smurfForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    postSmurf(smurfForm)
    setSmurfForm({
      name: "",
      age: "",
      height: ""
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name..."
          type="text"
          name="name"
          onChange={handleChange}
          value={smurfForm.name}
        />
        <input
          placeholder="Age..."
          type="text"
          name="age"
          onChange={handleChange}
          value={smurfForm.age}
        />
        <input
          placeholder="Height..."
          type="text"
          name="height"
          onChange={handleChange}
          value={smurfForm.height}
        />
        <button>Submit Smurf!</button>
      </form>
    </div>
  )
}

export default connect(null, { postSmurf })(SmurfForm)