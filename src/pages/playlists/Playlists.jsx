import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { MdFavorite, MdFavoriteBorder, MdPlaylistAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PlaylistService from '../../services/PlaylistsService'

const Playlists = () => {

    const [playlists, setPlaylists] = useState([])
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const playlists = PlaylistService.getAll()
        setPlaylists(playlists)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            PlaylistService.delete(i)
            setPlaylists(PlaylistService.getAll())
        }
    }

    const addFav = (props) => {
        console.log(props)
        if (window.confirm('Deseja realmente favoritar o registro?')) {
            let array = favorites;
            let addArray = true;

            array.map((album, i) => {
                
                if(album === props.i){
                    array.splice(i, 1)
                    addArray = false;
                }
            })
         
            if (addArray) {
                array.push(props.i)
            }
            setFavorites([...array])
            
            // AlbunsService.favoritar(i)
            // setFavorites(AlbunsService.getAll())
        }
    }


    return (
        <>
            <Box title="Playlists">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Nome do playlist</th>
                            <th>Genero</th>
                            <th>Data de Nascimento</th>
                            <th>Data de Falescimento</th>
                            <th>Ações</th>
                            <th>Mais</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlists.map((playlist, i) => (

                            

                            
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{playlist.nome}</td>
                                <td>{playlist.dataNasc}</td>
                                <td>{playlist.dataFalesc}</td>
                                <td>{playlist.país}</td>
                                <td>{playlist.instrumento}</td>
                                <td>
                                    <Link to={"/playlists/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger " title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>
                                    {favorites.includes() ? (< MdFavorite className="text-danger" title="Favoritar" onClick={() => addFav(playlist, i)} />) : (< MdFavoriteBorder className="text-danger" title="Favoritar" onClick={() => addFav(playlist, i)} />)} {' '}
                                    {/* {console.log(album, i)} */}
                                    <MdPlaylistAdd className="text-dark" title="Excluir" onClick={() => excluir(i)} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/albuns/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Playlist</Link>
            </Box>
        </>
    )
}

export default Playlists
