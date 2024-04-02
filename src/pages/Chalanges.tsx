import React from 'react'
import ChalangeCart from '../components/ChalangeCart'


const CHALANGES_LIST = [
    {
        id: 1,
        title: 'Pagination Conmponent',
        path: '/chalanges/pagination_component',
        level: 'Medium',
        description: 'Build a pagination component that fetches and displays data from an API, showing a fixed number of items per page.'
    },
    {
        id:2,
        title: 'Todo Lisst',
        path:'/chalanges/todo_list',
        level: 'Medium',
        description: 'Build a to-do list that allows users to add, edit, and remove tasks. Persist the tasks using local storage.'
    },{
        id:3,
        title: 'TicTakToe',
        path: '/chalanges/tic_tac_toe',
        level: 'Medium Advanced',
        description: 'Create game Tic Tak Toe'
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