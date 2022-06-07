import * as C from './styles'
import { Play, Pause, SkipBack, SkipForward, RandomMusics } from './svgs';
import { musicPlaying } from '../../types/types';
import { musics } from '../../data/data';
import { useEffect, useRef, useState } from 'react'

type Props = {
    id: string;
    setId: (e: string) => void
}

export const Player = ({ id, setId }: Props) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState('1')
    const [duration, setDuration] = useState()

    const audioTag = useRef(null);

    useEffect(() => {
        if (id !== '') {
            if (isPlaying) {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.play()
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.volume = volume 

            } else {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.pause()
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.volume = volume

            }
        }
    })

    const skipForward = () => {
        const idNum = parseInt(id);
        const newId = idNum + 1;
        setId(newId.toString())
    }
    const skipBack = () => {
        const idNum = parseInt(id);
        const newId = idNum - 1;
        setId(newId.toString())
    }

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
                        <audio src={music.audio} controls ref={audioTag}/>
                    </div>
                    : ''
                    ))
                }
            </div>
            <div className='player'>
                <button className='randomMusicsButton'>
                    <RandomMusics />
                </button>
                <button onClick={skipBack}>
                    <SkipBack />
                </button>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ?  <Pause /> : <Play />}
                </button>
                <button onClick={skipForward}>
                    <SkipForward />
                </button>
            </div>

            <div className='test'>
            <input
                type="range" 
                step="0.01"
                onChange={(e) => setVolume(e.target.value)} 
                value={volume}
                max='1'
                min='0' 
            />
            </div>
        </C.Container>
    )
}