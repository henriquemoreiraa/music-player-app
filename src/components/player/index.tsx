import * as C from './styles'
import { Play, Pause } from './svgs';
import { musicPlaying } from '../../types/types';
import { musics } from '../../data/data';
import { useEffect, useRef, useState } from 'react'

type Props = {
    id: string
}

export const Player = ({id}: Props) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const audioTag = useRef(null);

    useEffect(() => {
        if (id !== '') {
            if (isPlaying) {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.play()
            } else {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.pause()
            }
        }
    })

    return (
        <C.Container>
            
            <div className='musicDiv'>
                {musics.map(music => (
                    id === music.id ?
                    <div className='music'>
                        <img src={music.album_img} />
                        <div>
                            <h1>{music.name}</h1>
                            <h3>{music.author}</h3>
                        </div>
                        <audio src={music.audio} autoPlay ref={audioTag}/>
                    </div>
                    : ''
                    ))
                }
            </div>
            <div className='player'>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ?  <Pause /> : <Play />}
                </button>
            </div>

            <div className='test'>
                
            </div>
        </C.Container>
    )
}