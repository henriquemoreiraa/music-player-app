import {useEffect, useState} from 'react';
import { musics } from './data/data';
import * as C from './styles'
import { Player } from './components/player';
import { musicPlaying } from './types/types';
import './App.css';
import { Musics } from './components/musics';
import { Sidebar } from './components/sidebar';
import { SearchWhite } from './svgs/index'

function App() {
  const [id, setId] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [isFull, setIsFull] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [genre, setGenre] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div>
      <C.Container>

          <Sidebar 
            setGenre={setGenre}
            setIsSearch={setIsSearch}
            setIsFull={setIsFull}
            isSearch={isSearch}
          />

        <div className='top'>
          {isSearch ? 
            <><input onChange={(e) => setSearch(e.target.value)} type="text" /><button><SearchWhite /></button><h1 className='searchH1'>Search for music name, author or genre </h1> </> :
          <h1 className='title'>{isFull ? 'Single music' : 'All musics'}</h1>
          }
          <div className='divSongs'>
            <C.Music>
            {musics.map(music => (
              <Musics 
                img={music.album_img}
                name={music.name}
                author={music.author}
                audio={music.audio}
                genre={music.genre}
                setId={setId}
                musicId={music.id}
                id={id}
                setIsFull={setIsFull}
                isFull={isFull}
                setCurrentTitle={setCurrentTitle}
                genres={genre}
                isSearch={isSearch}
                search={search}
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
