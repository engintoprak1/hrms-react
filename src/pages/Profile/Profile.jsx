import React from 'react'
import Cvs from '../../components/Cvs/CvList'

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
