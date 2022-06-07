import {useEffect, useState} from 'react';
import { musics } from './data/data';
import * as C from './styles'
import { Player } from './components/player';
import { musicPlaying } from './types/types';
import './App.css';
import { Musics } from './components/musics';

function App() {
  const [id, setId] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [isFull, setIsFull] = useState(false)

  return (
    <div>
      <C.Container>
        <div className='oi'></div>
        <div className='top'>
        <h1 className='title'>{isFull ? 'Single music' : 'All musics'}</h1>
          <div className='divSongs'>
            <C.Music>
            {musics.map(music => (
              <Musics 
                img={music.album_img}
                name={music.name}
                author={music.author}
                audio={music.audio}
                setId={setId}
                musicId={music.id}
                id={id}
                setIsFull={setIsFull}
                isFull={isFull}
                setCurrentTitle={setCurrentTitle}
              />
              ))
              }
            </C.Music>
          </div>
        </div>
      </C.Container>
          <Player 
            id={id}
            setId={setId}
            setIsFull={setIsFull}
            isFull={isFull}
          /> 

    </div>
  );
}

export default App;
