import axios  from "axios";

export default class JobPositionService{

    getJobPosisitions(){
        return axios.get("http://localhost:8080/api/jobPositions/getall")
    }

}