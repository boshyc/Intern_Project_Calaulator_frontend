import { Router, useRouter }  from "next/router";
import axios from 'axios'
import { useState , useEffect } from 'react' 

const all = () => {
    
    const router = useRouter()
    const [Text , setText] = useState<any>([])
    const ps = async (id:any) => {
        await axios.get(`http://localhost:8000/history/multiply/${id}`).then((resp)=>{
            if(resp.status === 200){
                setText(resp.data)
            }
        })
        }
    useEffect(()=>{
        if(!router.isReady) return;
        console.log(router.query.id)
        ps(router.query.id)
    },[router.isReady])

    return(
            <div>
                        <p> id:{Text.id}&nbsp;</p>
                        <p> value1:{Text.value1}&nbsp; </p>
                        <p> value2:{Text.value2}&nbsp; </p>
                        <p> result:{Text.result}&nbsp; </p>
            </div>
    )
}



export default all;
