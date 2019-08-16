import React from 'react'
import { Grid } from 'semantic-ui-react'
import SmurfCard from './SmurfCard';

const SmurfVillage = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
      <SmurfCard />
      <SmurfCard />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SmurfVillage;