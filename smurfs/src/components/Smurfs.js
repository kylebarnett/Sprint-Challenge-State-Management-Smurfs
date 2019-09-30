import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const Smurfs = ({ getSmurfs, isFetching, smurfs }) => {

  useEffect(() => {
    getSmurfs()
  }, [getSmurfs])

  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs)