import Link from "next/link";
const index = () =>{
    return(    
    <div>
        <h1>WELCOME</h1>
        <div>
        <Link href="/insert/value/plus">
            <a>
                PLUS
            </a>
        </Link>
        </div>
        <div>
        <Link href="/history/plus">
            <a>
                PLUS HISTORY
            </a>
        </Link>
        </div>
        <div>
        <Link href="/insert/value/subtract">
            <a>
                SUBTRACT
            </a>
        </Link>
        </div>
        <div>
        <Link href="/history/subtract">
            <a>
                SUBTRACT HISTORY
            </a>
        </Link>
        <div>
        <Link href="/insert/value/multiply">
            <a>
                MULTIPLY
            </a>
        </Link>
        </div>
        <div>
        <Link href="/history/multiply">
            <a>
                MULTIPLY HISTORY<br></br>
            </a>
        </Link>
        <div>
        <Link href="/insert/value/division">
            <a>
                DIVISION
            </a>
        </Link>
        </div>
        <div>
        <Link href="/history/division">
            <a>
                DIVISION HISTORY<br></br>
            </a>
        </Link>
        </div>
        </div>
        </div>
        
    </div>
    )
}

export default index;