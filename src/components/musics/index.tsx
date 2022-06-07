import * as C from './styles';
import { musicPlaying } from '../../types/types';
import { useEffect, useRef, useState } from 'react';
import { musics } from '../../data/data';


type Props = {
    img: string;
    name: string;
    author: string;
    audio: string;
    musicId: string;
    id: string;
    setId: (e: string) => void
    isFull: boolean;
    setIsFull: (e: boolean) => void
    setCurrentTitle: (e: string) => void
}

export const Musics = ({ img, name, author, audio, setId, musicId, setIsFull, isFull, id, setCurrentTitle }: Props) => {
    return (
        <C.Container>
            { isFull ? 
                musicId === id  ?
                <div className='containerFull'>
                    <div className='divFull'>
                        <img src={img} alt="" />
                        <h1>{name}</h1>
                        <h3>{author}</h3>
                    </div>
                </div>
                : ''
            :
                
                <div className='divAll' onClick={() => (setId(musicId), setCurrentTitle(name))}>
                    <img src={img} />
                    <h1>{name}</h1>
                    <h3>{author}</h3>
                    <audio src={audio} />
                </div>
            }
        </C.Container>
    )
}