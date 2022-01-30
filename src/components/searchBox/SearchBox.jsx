import './style.css'

const SearchBox = ({ handleSearchChange }) => (
  <div className='search-box'>
    <input type='search' placeholder='search' onChange={handleSearchChange} />
  </div>
)

export default SearchBox
