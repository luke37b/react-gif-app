import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Homero']);

    return (
        <>
            <h2>Buscador de Gifs</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map(c =>
                    <GifGrid
                        key={c}
                        category={c}
                    />
                )}
            </ol>
        </>
    );
};
