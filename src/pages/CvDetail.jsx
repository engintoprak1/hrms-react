import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CvService from '../services/cvService'

export default function CvDetail() {
    
    let {id} = useParams()

    const [cv, setCv] = useState({})

    

    useEffect(()=>{
        let cvService = new CvService()
        cvService.getDetailsById(id).then(result=>setCv(result.data.data))
        
    },[])

    return (
        <div>
            Cv Detayı {id}
            {cv.linkedinAddress}
            
        </div>
    )
}
