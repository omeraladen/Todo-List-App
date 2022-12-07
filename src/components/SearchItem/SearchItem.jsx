import React from 'react'

function SearchItem({ search , setSearch }) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text" 
            name="" 
            id="seach=item" 
            role='searchbox'
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem;