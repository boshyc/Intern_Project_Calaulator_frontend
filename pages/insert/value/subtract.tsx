import axios from "axios";
import { useState } from "react";

const post = async (value1:any,value2:any) => {
    axios.post('http://localhost:8000/api/subtract', {
        "value1":value1,
        "value2":value2
    })
}

const index = () =>{
    const [value1 , setValue1] = useState('0')
    const [value2 , setValue2] = useState('0')
    return(    
        <div>
            <form method="post">
                <div>                
                    <label>value1</label>
                    <input 
                        name="value1" 
                        value={value1}  
                        onChange={(e:any) => setValue1(e.currentTarget.value)}>

                    </input>
                </div>
                <div>                
                    <label>value2</label>
                    <input 
                        name="value2" 
                        value={value2}  
                        onChange={(e:any) => setValue2(e.currentTarget.value)}>

                    </input>
                </div>
                <div>
                    <label>
                {
                        (parseInt(value1)+parseInt(value2))?(parseInt(value1)-parseInt(value2)):value1||value2
                }
                    </label>
                </div>
            </form>
            <button onClick={() => post(value1,value2)}>save</button>
        </div>
    )
}

export default index;