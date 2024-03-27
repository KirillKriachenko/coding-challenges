import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import style from '../styles/pagination.module.css'
import '../styles/Pagination.css'

type Meme = {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
    captions: number;
}

function Pagination() {

    const [memeData, setMemeData] = useState<Array<Meme>>([]);
    const [currentPage, setCurrentPage] = useState(1);

    let totalCount;
    let pageCount;
    const maxItems = 6;
    let pages: Array<number> = []




    useEffect(() => {

        const getData = async () => {
            const result = await axios.get('https://api.imgflip.com/get_memes');

            if (result.status === 200) {
                setMemeData(result.data.data.memes);
                // totalCount = result.data.data.memes.length;
                // pageCount = Math.ceil(result.data.data.memes.length / maxItems);


            }

        }

        getData();

    }, [])

    const displayMemes = () => {

    }

    const pageNavigation = () => {
        if (memeData) {
            pageCount = Math.ceil(memeData.length / maxItems);
            
            for (let i = 0; i < pageCount; i++) {
                pages.push(i + 1);
            }

            return <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20}}>
                <a onClick={() => console.log(currentPage)} className='pageButtons'>Left</a>
                {
                    pages.map((key) => (<a onClick={() => setCurrentPage(key)} className={currentPage == key ? 'active pageButtons': 'pageButtons'}>{key}</a>))
                }
                <a onClick={() => console.log(currentPage)} className='pageButtons'>Right</a>
            </div>
        }

    }

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Pagination</h3>
            {
                pageNavigation()
            }
        </div>
    )
}

export default Pagination