import React, {useState} from 'react'
import ListaDenunciados from '../../components/ListaDenunciados'
import "./Denuncias.css"


export default function Denuncias() {
    const [keyword, setKeyword] = useState('')
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        setSearchKeyword(keyword)
    }


    return (
        <div class="div-main">
            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1">
                    <h1>Denuncias</h1>
                </div>
                <div class="flexbox-item flexbox-item-2">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} style={{width: "90%"}} type='text' placeholder='Busca tu usuario' value={keyword}/>
                        <button>Search</button>
                    </form>
                </div>
                <div class="flexbox-item flexbox-item-3">
                    <ListaDenunciados searchKeyword={searchKeyword} />
                </div>
            </div>
        </div>
    )
}