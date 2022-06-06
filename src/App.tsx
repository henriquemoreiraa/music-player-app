import {useEffect, useState} from 'react';
import { musics } from './data/data';
import * as C from './styles'
import './App.css';

function App() {
  const [datas, setData] = useState([{}])

  useEffect(() => {
    setData(musics)
  }, [])

  return (
    <div>
      <C.Container>
        <div className='oi'></div>
        <div>
        <h1 className='title'>All musics</h1>
          <div className='divSongs'>
            <C.Music>
            {musics.map(item => (
              <div>
                  <img src={item.album_img} alt="" />
                  <h1>{item.name}</h1>
                  <h3>{item.author}</h3>
                  <audio src={item.audio}></audio>
                </div>
              ))
              }
            </C.Music>
          </div>
        </div>
      </C.Container>
        <div className='ola'>
      
        </div>
    </div>
  );
}

export default App;
