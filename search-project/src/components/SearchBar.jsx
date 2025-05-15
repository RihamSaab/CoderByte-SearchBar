import React, { useState } from 'react'

function SearchBar() {
const [searchValue, setSearchValue] = useState('');
const dataList =[
    "red",
    "blue",
    "baby blue",
    "orange",
    "white",
    "black",
    "pink",
    "purple",
    "baby pink"
]

// filter the data list item = searchedValue
const filterData = dataList.filter(item =>item.toLowerCase().includes(searchValue.toLocaleLowerCase()))

// highlight text = searchedValue
const highlight = (text, searchText) =>{
    if(!searchText) return text;
    const lowerText = text.toLowerCase()
    const lowerSearch = searchText.toLowerCase()

    const index = lowerText.indexOf(lowerSearch)
    if(index === -1) return text;
    return(
        <>
        {text.substring(0, index)}
        <span style={{backgroundColor: 'yellow'}}>
            {text.substring(index, index+ searchText.length)}
        </span>
        {text.substring(index+ searchText.length)}
        </>
    )

}
  return (
    <div
    style={{
            height: '40rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F0EF',
            paddingTop: "1.5rem"
        }}>
        <input
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
        style={{
            padding: '10px',
            borderRadius: '1em'
        }}
        />
        {/* <h2>{searchValue}</h2> */}
        <h1>Filtered List:</h1>
        {(filterData.length<1) &&<p>No Result Found</p>}
        <ul>
            {filterData.map((item, index)=>{
                 return <li key={index}>{highlight(item, searchValue)}</li>
            })}
        </ul>        
        
        <h1>Original List:</h1>
        <ul>
            {dataList.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default SearchBar