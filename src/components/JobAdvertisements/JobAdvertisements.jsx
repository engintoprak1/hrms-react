import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { format } from 'date-fns';

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
                                <Card.Header><Link to={`/jobAdvertisements/${jobAdvertisement.id}`}>{jobAdvertisement.employer.companyName}</Link></Card.Header>
                                <Card.Description>
                                {jobAdvertisement.jobPosition.positionName}
                                </Card.Description>
                                <Card.Meta>{jobAdvertisement.jobDescription}</Card.Meta>
                                
                                <Card.Description>
                                Son Başvuru Tarihi : {format(new Date(jobAdvertisement.applicationDeadline.replace("T", " ")),"dd.MM.yyyy HH:mm")}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))
                }

            </Card.Group>

        </div>
    )
}
