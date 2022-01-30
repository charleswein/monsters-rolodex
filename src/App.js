import './App.css'
import { Component } from 'react'
import CardList from './components/cardList/CardList'
import SearchBox from './components/searchBox/SearchBox'

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        const getMonsters = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            this.setState({ monsters: data })
        }

        getMonsters()
    }

    handleSearchChange = (e) => this.setState({searchField: e.target.value})

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
          <div className='App'>
              <SearchBox handleSearchChange={this.handleSearchChange} />
              <CardList monsters={filteredMonsters} />
          </div>
        )
    }
}

export default App
