import * as C from './styles'
import { musicPlaying } from '../../types/types';
import { useEffect, useRef, useState } from 'react'

type Props = {
    img: string;
    name: string;
    author: string;
    audio: string;
    id: string;
    setId: (e: string) => void
}

export const Musics = ({ img, name, author, audio, setId, id}: Props) => {
    const audioTag = useRef(null);

    // useEffect(() => {
    //     if (isPlaying) {
    //         // @ts-ignore: Object is possibly 'null'.
    //             audioTag.current.play()
    //         } else {
    //             // @ts-ignore: Object is possibly 'null'.
    //             audioTag.current.pause()
    //         }
    // })


    return (
        <C.Container>
            <div onClick={() => setId(id)}>
                <img src={img} />
                <h1>{name}</h1>
                <h3>{author}</h3>
                <audio src={audio} ref={audioTag}/>
            </div>
        </C.Container>
    )
}