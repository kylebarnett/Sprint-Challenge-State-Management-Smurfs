import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = (props) => {
  return (
    <div>
      <h1>Name: {props.smurf.name}</h1>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Me!</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf)