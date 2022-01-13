import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PathId = () => {
    const router = useRouter()

    useEffect(() => {
        console.log(window.location);
        axios.get(`http://localhost:5000${window.location.pathname}`)
            .then(response =>{
                if(response.data.response.main_link){
                    window.location.replace(response.data.response.main_link)
                }
            })
    }, [])
    return (
        <div>
        </div>
    )
}

export default PathId;