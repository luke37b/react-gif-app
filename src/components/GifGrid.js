import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { loading, data: gifs } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando</p>}

            <div className="card-grid ">
                {
                    gifs.map(g =>
                        <GifGridItem
                            key={g.id}
                            {...g}
                        />
                    )
                }
            </div>
        </>
    )
}