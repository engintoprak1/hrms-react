import React from 'react'
import JobAdvertisements from '../components/JobAdvertisements/JobAdvertisements'
import { Grid } from 'semantic-ui-react'
import JobPositions from '../components/JobPositions/JobPositions'
import { Route } from 'react-router'
import AddJobAdvertisement from '../components/AddJobAdvertisement/AddJobAdvertisement'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobPositions></JobPositions>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdvertisements}/>
                        <Route path="/jobAdvertisements" component={JobAdvertisements}/>
                        <Route path="/jobAdvertisements/1" component={JobAdvertisements}/>
                        <Route path="/addJobAdvertisement" component={AddJobAdvertisement}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
