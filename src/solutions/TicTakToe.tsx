import React, { useState } from 'react';
import './TicTakToe.css'
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';

const data = ["","","","","","","","",""]

function TicTakToe(){

    const [currTurn, setCurTurn] = useState(1);
    const [title, setTitle] = useState('Tic Tac Toe game')    


    const onCellClick = (e:any, num:number) => {

        if (data[num] == ""){
            if(currTurn % 2 == 0){
                e.target.innerHTML = `<img src='${circle}' />`;
                data[num] = 'o';
            }
            else{
                e.target.innerHTML = `<img src='${cross}' />`;
                data[num] = 'x';
     
            }
            setCurTurn(currTurn + 1);
            winFunc();
        }
    }

    const winFunc = () => {
        if(data[0] == data[1] && data[1] == data[2] && data[0] != ""){
            document.getElementById('0')?.classList.add('wincell');
            document.getElementById('1')?.classList.add('wincell');
            document.getElementById('2')?.classList.add('wincell');
            setTitle('Winer is: ' + data[0])
        }
        else if(data[3] == data[4] && data[4] == data[5] && data[3] != ""){
            document.getElementById('3')?.classList.add('wincell');
            document.getElementById('4')?.classList.add('wincell');
            document.getElementById('5')?.classList.add('wincell');
            setTitle('Winer is: ' + data[3])
        }
        else if(data[6] == data[7] && data[7] == data[8] && data[6] !== ""){
            document.getElementById('6')?.classList.add('wincell');
            document.getElementById('7')?.classList.add('wincell');
            document.getElementById('8')?.classList.add('wincell');
            setTitle('Winer is: ' + data[6])
        }
        else if(data[0] == data[4] && data[4] == data[8] && data[0] !== ""){
            document.getElementById('0')?.classList.add('wincell');
            document.getElementById('4')?.classList.add('wincell');
            document.getElementById('8')?.classList.add('wincell');
            setTitle('Winer is: ' + data[0])
        }
        else if(data[2] == data[4] && data[4] == data[6] && data[2] !== ""){
            document.getElementById('2')?.classList.add('wincell');
            document.getElementById('4')?.classList.add('wincell');
            document.getElementById('6')?.classList.add('wincell');
            setTitle('Winer is: ' + data[2])
        }
    }

    return (
        <div className='main-container'>
            <div style={{marginTop:'20px'}}>
                <h3 className='title'>{title}</h3>
            </div>
            <div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' id='0' onClick={(target) => onCellClick(target,0)}></div>
                    <div className='cell' id='1' onClick={(target) => onCellClick(target,1)}></div>
                    <div className='cell' id='2' onClick={(target) => onCellClick(target,2)}></div>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' id='3' onClick={(target) => onCellClick(target,3)}></div>
                    <div className='cell' id='4' onClick={(target) => onCellClick(target,4)}></div>
                    <div className='cell' id='5' onClick={(target) => onCellClick(target,5)}></div>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div className='cell' id='6' onClick={(target) => onCellClick(target,6)}></div>
                    <div className='cell' id='7' onClick={(target) => onCellClick(target,7)}></div>
                    <div className='cell' id='8' onClick={(target) => onCellClick(target,8)}></div>
                </div>
            </div>
            <div>
                <button className='reset-btn'>Reset</button>
            </div>

        </div>
    )
}

export default TicTakToe;