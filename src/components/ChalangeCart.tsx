import React from 'react'

type Props = {
    data: {
        id: number;
        title: string;
        path: string;
        level:string;
        description: string;
    }
}

function ChalangeCart(props: Props) {
    return (
        <a style={{ color: 'black', textDecoration:'none' }} href={props.data.path}>
            <div style={{ maxWidth: '30vw', border: '1px solid #6496eb', padding:20 }}>
                <p style={{ fontSize: 18 }}>{props.data.title}</p>
                <p style={{ fontSize: 14, fontWeight:'300', fontFamily:'Arial' }}>{props.data.description.toLowerCase()}</p>
            </div>
        </a>
    )
}

export default ChalangeCart