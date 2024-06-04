import { useEffect } from 'react'
import Link from 'next/link'
interface Countries {
    flag: string
    name: string
    code: string
}

const Card = (props: Countries) => {
    return (
        <Link href={`${props.code}`}>
            <div className="group">
                <img src={props.flag}></img>
                <div className="title">
                    <p className="text-center">{props.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
