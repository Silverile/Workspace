import {useRouter} from "next/router";


export default function SeletedClientProjectPage(){
    const router = useRouter()

    console.log(router.query)

    return(

        <div>
            <h1>The project page for the specific client</h1>
        </div>
    )
}