import React, { useState } from 'react';
import './TicTakToe.css'
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';

const data = ["","","","","","","",""]

function TicTakToe(){

    const [currTurn, setCurTurn] = useState(1);
    


    const onCellClick = (e:any, num:number) => {

        if(currTurn % 2 == 0){
            e.target.innerHTML = `<img src='${circle}' />`;
        }
        else{
            e.target.innerHTML = `<img src='${cross}' />`;
 
        }
        setCurTurn(currTurn + 1);
        
        
    }

    return (
        <div className='main-container'>
            <div style={{marginTop:'20px'}}>
                <h3 className='title'>Tic Tac Toe game</h3>
            </div>
            <div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' onClick={(target) => onCellClick(target,0)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,1)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,2)}></div>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' onClick={(target) => onCellClick(target,3)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,4)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,5)}></div>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' onClick={(target) => onCellClick(target,6)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,7)}></div>
                    <div className='cell' onClick={(target) => onCellClick(target,8)}></div>
                </div>
            </div>
            <div>
                <button className='reset-btn'>Reset</button>
            </div>

        </div>
    )
}

export default TicTakToe;