import axios from 'axios'
import { useState , useEffect } from 'react' 

const all = () => {
    const [Text , setText] = useState<any>([])
    const ps = async () => {
        console.log('a1')
        await axios.get('http://localhost:8000/history/multiply').then((resp)=>{
            if(resp.status === 200){
                console.log(resp.data)
                setText(resp.data)
            }
        })
        }
    useEffect(()=>{
        ps()
    },[])
    return(
        <div>
                {Text.map((post:any) => 
                    <tr>
                        <td> id:{post.id}&nbsp;</td>
                        <td> value1:{post.value1}&nbsp; </td>
                        <td> value2:{post.value2}&nbsp; </td>
                        <td> result:{post.result}&nbsp; </td>
                    </tr>
                )}
        </div>
    )
}

export default all;