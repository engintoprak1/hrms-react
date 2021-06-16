import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService'

export default function JobAdvertisements() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    },[])

    return (
        <div>
            <Card.Group>
                {
                    jobAdvertisements.map(jobAdvertisement => (
                        <Card key={jobAdvertisement.id}>
                            <Card.Content>
                                <Card.Header>{jobAdvertisement.employer.companyName}</Card.Header>
                                <Card.Meta>{jobAdvertisement.jobDescription}</Card.Meta>
                                <Card.Description>
                                {jobAdvertisement.jobPosition.positionName}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))
                }

            </Card.Group>

        </div>
    )
}
