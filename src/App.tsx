import {useEffect, useState} from 'react';
import { musics } from './data/data';
import * as C from './styles'
import { Player } from './components/player';
import { musicPlaying } from './types/types';
import './App.css';
import { Musics } from './components/musics';
import { Sidebar } from './components/sidebar';
import { SearchWhite,Search, Menu } from './svgs/index'

function App() {
  const [id, setId] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [isFull, setIsFull] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [genre, setGenre] = useState('')
  const [search, setSearch] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isSidebar, setIsSidebar] = useState(false)
    
    useEffect(() => {
      window.addEventListener("resize", () => {
           setWindowWidth(window.innerWidth)
      })
    }, [])
  return (
    <div>
      <C.Container>

          <Sidebar 
            setGenre={setGenre}
            setIsSearch={setIsSearch}
            setIsFull={setIsFull}
            isSearch={isSearch}
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
          />

        <div className='top'>
          {isSearch ? 
            <>
            {windowWidth <= 820 ? <button className='showSidebar' onClick={() => setIsSidebar(!isSidebar)}><Menu /></button> : ''}
            <input onChange={(e) => setSearch(e.target.value)} autoFocus placeholder='Search' type="text" /><h1 className='searchH1'>Search for music name, author or genre </h1> </> :
            <>
              {windowWidth <= 820 ? <button className='showSidebar' onClick={() => setIsSidebar(!isSidebar)}><Menu /></button> : ''}
                        <h1 className='title'>{isFull && windowWidth <= 820 ? '' : 'All musics'}</h1>
            </>
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
                windowWidth={windowWidth}
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
            windowWidth={windowWidth}
          /> 

    </div>
  );
}

export default App;
