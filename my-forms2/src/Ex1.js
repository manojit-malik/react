import React,{createContext, useState} from 'react'
import Count from './Count'
import Display from './Display'

export const store = createContext()

const Ex1 = () => {

    const [data, setData] =useState ([
    {
        brandName : 'Kokabura',
    },
    {
        brandName : 'SG',
    },
    {
        brandName : 'NB',
    }])
  return (
    <div>
        <store.Provider value={[data, setData]}>

            <Count />

            <Display />

        </store.Provider>

    </div>
  )
}

export default Ex1