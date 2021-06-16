import React from 'react'
import { Grid } from "semantic-ui-react";
import Cvs from '../components/Cvs/Cvs'

export default function Profile() {
    return (
        <div>
            <Grid celled="internally">
                <Grid.Row>
                    <Grid.Column width="12">
                        <Cvs></Cvs>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
