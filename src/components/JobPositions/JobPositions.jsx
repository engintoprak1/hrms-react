import React, { useState, useEffect } from 'react'
import JobPositionService from '../../services/jobPositionsService'
import { Menu } from 'semantic-ui-react'

export default function JobPositions() {

    const [jobPositions, setjobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosisitions().then(result => setjobPositions(result.data.data))
    },[])

    return (
        <div>

            <Menu pointing secondary vertical>
                {
                    jobPositions.map(jobPosition => (
                        <Menu.Item key={jobPosition.id}>
                            {jobPosition.positionName}
                        </Menu.Item>
                    ))
                }
                
            </Menu>

        </div>

    )
}
