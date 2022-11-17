import React, { useEffect, useState } from 'react'
import { apiURL } from '../util/api';

const AllCountries = () => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getAllCountries = async() => {

    try {
      const res = await fetch(`${apiURL}/all`)

      if(!res.ok) throw new Error('Something went wrong')

      const data = await res.json()
      console.log(data);

      setCountries(data)

      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  };
  useEffect(() => {
    getAllCountries()
  },[])


  return <div className='all__country__wrapper'>
  <div className='country__top'>
<h5 className='text-white'>Cai gi vay</h5>
  </div>

  <div className='country__bottom'></div>
  </div>
}

export default AllCountries
