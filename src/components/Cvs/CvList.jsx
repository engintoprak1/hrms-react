import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CvService from '../../services/cvService'
import { Button, Card, Image } from 'semantic-ui-react'
import { format } from 'date-fns'

export default function Cvs() {

    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let cvService = new CvService()
        cvService.getAll().then(result => setCvs(result.data.data))
    },[])

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
                                    src={cv.photo}
                                />
                                <Card.Header><Link to={`/cvs/${cv.id}`}>{cv.cvTitle}</Link></Card.Header>
                                <Card.Meta>{cv.createDate?format(new Date(cv.createDate.replace("T", " ")),"dd.MM.yyyy HH:mm"):""}</Card.Meta>
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
