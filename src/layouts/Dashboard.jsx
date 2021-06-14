import React from 'react'
import JobAdvertisements from '../components/JobAdvertisements/JobAdvertisements'
import { Grid } from 'semantic-ui-react'
import JobPositions from '../components/JobPositions/JobPositions'
import Cvs from '../components/Cvs/Cvs'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobPositions></JobPositions>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisements></JobAdvertisements>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Cvs></Cvs>
                </Grid.Row>
            </Grid>


        </div>
    )
}
