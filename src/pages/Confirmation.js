import React, { useEffect } from 'react'

const Confirmation = props => {
  useEffect(() => {
    const key = props.match.params.key
    console.log(key)
  }, [])

  return <React.Fragment />
}

export default Confirmation
