import * as C from './styles';
import { Play, Pause, SkipBack, SkipForward, RandomMusicsTrue, RandomMusicsFalse, VolumeOff, VolumeOn } from './svgs';
import { musics } from '../../data/data';
import { useEffect, useRef, useState } from 'react';

type Props = {
    id: string;
    isFull: boolean;
    setId: (e: string) => void
    setIsFull: (e: boolean) => void
}

export const Player = ({ id, setId, setIsFull, isFull }: Props) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState('1')
    const [oldVolume, setOldVolume] = useState(volume)
    const [duration, setDuration] = useState(0)
    const [isRandom, setIsRandom] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [isMuted, setIsMuted] = useState(false)

    const audioTag = useRef(null)
    const progressBar = useRef(null)
    const animationRef = useRef()

    useEffect(() => {
        if (id !== '') {
            if (isPlaying) {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.play()
                // @ts-ignore: Object is possibly 'null'.
                animationRef.current = requestAnimationFrame(whilePlaying)
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.volume = volume 
                if (isMuted) {
                    // @ts-ignore: Object is possibly 'null'.
                    audioTag.current.muted = true
                    // @ts-ignore: Object is possibly 'null'.
                } else audioTag.current.muted = false

                const interval = setInterval(() => {
                    // @ts-ignore: Object is possibly 'null'.
                    const seconds = Math.floor(audioTag?.current?.duration)
                    setDuration(seconds)  
                    // @ts-ignore: Object is possibly 'null'.
                    progressBar.current.max = seconds                      
                }, 200)
                setInterval(() => {
                    if (duration > 0 || duration !== undefined) {
                        clearInterval(interval)
                            // @ts-ignore: Object is possibly 'null'.
                        if (audioTag.current.currentTime === audioTag.current.duration) {
                                isRandom ? skipRandom() : skipForward()
                            
                            }
                    }
                }, 1000)
            } else {
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.pause()
                // @ts-ignore: Object is possibly 'null'.
                audioTag.current.volume = volume
                // @ts-ignore: Object is possibly 'null'.
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [[], isRandom])

    
    const calculateDuration = (sec: number) => {
        const minutes = Math.floor(sec / 60)
        const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(sec % 60)
        const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${minutes}:${seconds}`
    }
    
    
    const skipForward = () => {
        const idNum = parseInt(id);
        const newId = idNum + 1;
        setId(newId.toString())
    }

    const skipRandom = () => {
        const idNum = parseInt(id)
        const randomNum = Math.floor(Math.random() * 9)
        if (randomNum === 0 || randomNum === idNum) {
            const newNum = randomNum + 1 
            setId(newNum.toString())
        } else {
            setId(randomNum.toString())
        }
    }

    const skipBack = () => {
        const idNum = parseInt(id);
        const newId = idNum - 1;
        setId(newId.toString())
    }

    const whilePlaying = () => {
        // @ts-ignore: Object is possibly 'null'.
        progressBar.current.value = audioTag.current.currentTime
        // @ts-ignore: Object is possibly 'null'.
        animationRef.current = requestAnimationFrame(whilePlaying)
        changeCurrentTime()
    }

    const changeRange = () => {
        // @ts-ignore: Object is possibly 'null'.
        audioTag.current.currentTime = progressBar.current.value
        changeCurrentTime()
    }
    
    const changeCurrentTime = () => {
        // @ts-ignore: Object is possibly 'null'.
        setCurrentTime(progressBar.current.value)
    }

    
    return (
        <C.Container>
            
            <div className='musicDiv'>
                {musics.map(music => (
                    id === music.id ?
                    <div onClick={() => setIsFull(!isFull)} className='music'>
                        <img src={music.album_img} />
                        <div>
                            <h1>{music.name}</h1>
                            <h3>{music.author}</h3>
                        </div>
                        <audio src={music.audio} ref={audioTag}/>
                    </div>
                    : ''
                    ))
                }
            </div>
            <div className='player'>
                <div className='tete'>
                    <div className='tata'>
                        <p className='PcurrentTime'>{calculateDuration(currentTime)}</p>
                        <input type="range" className='currentProgress' defaultValue='0' ref={progressBar} onChange={changeRange}/>
                        <p className='Pduration'>{(duration && !isNaN(duration)) && calculateDuration(duration)}</p>
                    </div>
                    <div className='terere'>
                        <button onClick={() => setIsRandom(!isRandom)} className='randomMusicsButton'>
                            {isRandom ? <RandomMusicsTrue /> : <RandomMusicsFalse />}
                        </button>
                        <button onClick={skipBack}>
                            <SkipBack />
                        </button>
                        <button className='playPause' onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ?  <Pause /> : <Play />}
                        </button>
                        <button onClick={skipForward}>
                            <SkipForward />
                        </button>
                        
                    </div>
                </div>
            </div>

            <div className='test'>
            <button className='volumeButton' onClick={() => setIsMuted(!isMuted)}>
               {isMuted ? <VolumeOff/> : <VolumeOn />}
            </button>
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