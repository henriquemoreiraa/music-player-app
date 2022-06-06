import {useEffect, useState} from 'react';
import { musics } from './data/data';
import * as C from './styles'
import { Player } from './components/player';
import { musicPlaying } from './types/types';
import './App.css';
import { Musics } from './components/musics';

function App() {
  const [id, setId] = useState('')

  return (
    <div>
      <C.Container>
        <div className='oi'></div>
        <div className='top'>
        <h1 className='title'>All musics</h1>
          <div className='divSongs'>
            <C.Music>
            {musics.map(music => (
              <Musics 
                img={music.album_img}
                name={music.name}
                author={music.author}
                audio={music.audio}
                setId={setId}
                id={music.id}
              />
              ))
              }
            </C.Music>
          </div>
        </div>
      </C.Container>
          <Player 
            id={id}
          /> 

    </div>
  );
}

export default App;
