import React from 'react'


export const CompSearch = (props) => {

  return (
    <div>
      <input type="text"
        placeholder="search...."
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}

      />


    </div>
  )
}
