import {useRouter } from 'next/router'

export default function PortfolioProjectPage(){

    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)

    //send a req to backend
    //to fetch the piece of data with an id of router.query.projectid

    return(
        <div>
            <h1>Portfolio Project Page</h1>
        </div>
    )
}