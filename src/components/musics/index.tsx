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
    setId: (e: string) => void;
    isFull: boolean;
    setIsFull: (e: boolean) => void;
    setCurrentTitle: (e: string) => void;
    genre: string;
    genres: string;
    isSearch: boolean;
    search: string;
    windowWidth: number;
}

export const Musics = ({ img, name, author, audio, setId, musicId, setIsFull, isFull, id, setCurrentTitle, genre, genres, isSearch, search, windowWidth }: Props) => {
    return (
        <C.Container>
            { isSearch ? 
                search.toLowerCase() === name.toLowerCase() || search === author.toLowerCase() || search === genre.toLowerCase() ?
                <div className='divGenre' onClick={() => setId(musicId)}>
                    <img src={img} />
                    <h1>{name}</h1>
                    <h3>{author}</h3>
                    <audio src={audio} />
                </div> : 
                ''
             : 
            
                genres !== '' ? 
                    genre === genres ? 
                        <div className='divGenre' onClick={() => setId(musicId)}>
                            <img src={img} />
                            <h1>{name}</h1>
                            <h3>{author}</h3>
                            <audio src={audio} />
                        </div> : ''
                    :
                    isFull && windowWidth <= 810 ? 
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
                        
                        <div className='divAll' onClick={() => setId(musicId) }>
                            <img src={img} />
                            <h1>{name}</h1>
                            <h3>{author}</h3>
                            <audio src={audio} />
                        </div>
                    
            }
        </C.Container>
    )
}