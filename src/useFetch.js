import {  useCallback, useState } from 'react'

const UseFetch = () => {

    const [state , setState] = useState()

    const extractDataFromApi=(url , method , payload)=>{
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(json => setState(json))
    }



  console.log(  { state , extractDataFromApi} )
  return {state , extractDataFromApi}
}

export default UseFetch