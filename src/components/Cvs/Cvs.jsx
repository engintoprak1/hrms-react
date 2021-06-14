import React, { useState,useEffect } from 'react'
import CvService from '../../services/cvsService'
import { Button, Card, Image } from 'semantic-ui-react'

export default function Cvs() {

    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let cvService = new CvService()
        cvService.getCvs().then(result => setCvs(result.data.data))
    })

    return (
        <div>
            <Card.Group>
                {
                    cvs.map(cv => (
                        <Card key={cv.id}>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src='/images/avatar/large/steve.jpg'
                                />
                                <Card.Description>
                                    {cv.coverLetter}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Use
                                    </Button>
                                    <Button basic color='red'>
                                        Delete
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }

            </Card.Group>

        </div>
    )
}
