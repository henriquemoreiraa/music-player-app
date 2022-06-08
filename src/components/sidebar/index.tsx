import * as C from './styles'
import { musics } from '../../data/data';
import { Home, Search } from '../../svgs/index'

type Props = {
    setGenre: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
}

export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch }: Props) => {
    return (
        <C.Container>   
            <div className='inicialSearch'>
                <div onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false))} className='iniSearDivs'><p><Home/></p> Inicial Page</div>
                <div onClick={() => setIsSearch(!isSearch)}className='iniSearDivs'><p><Search /></p> Search</div>
            </div>

            <div className='genres'>
                <h2>Genres</h2>
                <div onClick={() => setGenre('Beats')}>Beats</div>
                <div onClick={() => setGenre('Ambient')}>Ambient</div>
                <div onClick={() => setGenre('Classic')}>Classic</div>
                <div onClick={() => setGenre('Eletronic')}>Eletronic</div>
            </div>
        </C.Container>
    )
} 