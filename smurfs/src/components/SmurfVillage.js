import React from 'react'
import { Grid } from 'semantic-ui-react'
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { getData } from "../actions";


const SmurfVillage = (props) => {
  console.log('props received: ', props);

  return(
  <>
    <button onClick={props.getData} > show village</button>
    
    <Grid>
    <Grid.Row>
      <Grid.Column>

        {props.smurfsCollection && (props.smurfsCollection.map(smurf => <SmurfCard key={smurf.name} smurf={smurf}></SmurfCard>))}
  
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
  )

  }

const mapStateToProps = state => {
  return {
      ...state,

  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfVillage);