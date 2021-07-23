import React, { useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
          <h2>GifExpert tj 2021</h2>
          <AddCategory setCategories={ setCategories }/>
          <hr />

          <ol>
            {
              categories.map( categoria => (
                 <GifGrid
                  key= { categoria } 
                  categoria = {categoria}
                  />
              ))
            }
          </ol>
        </>
    )
}
