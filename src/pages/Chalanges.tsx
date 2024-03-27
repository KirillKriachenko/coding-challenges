import React from 'react'
import ChalangeCart from '../components/ChalangeCart'


const CHALANGES_LIST = [
    {
        id: 1,
        title: 'Pagination Conmponent',
        path: '/chalanges/pagination_component',
        level: 'Medium',
        description: 'Build a pagination component that fetches and displays data from an API, showing a fixed number of items per page.'
    }
]

function Chalanges() {

    const cartComponents = CHALANGES_LIST.map((item, index) => <li key={index}><ChalangeCart data={item} /></li>)


    return (
        <ul>
            {cartComponents}
        </ul>

    )
}

export default Chalanges