import React from 'react'

const FillterCountry = ({onSelect}) => {

    const selectHandler = e => {
        const regionName = e.target.value;
        onSelect(regionName)
    }
  return (
    <select  onChange={selectHandler}>
    <option>Filter by Region</option>
    <option className='option' value="Africa">Africa</option>
    <option className='option' value="Americas">America</option>
    <option className='option' value="Asia">asia</option>
    <option className='option' value="Europe">Europe</option>
    <option className='option' value="Oceania">Oceania</option>
    </select>
  )
}

export default FillterCountry
