import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Menu from './components/Menu'
import Settings from './components/Settings'

import Home from './components/Home'
import Live from './components/Live'
import Movies from './components/Movies'
import Sports from './components/Sports'
import TVShows from './components/TVShows'
import NotFound from './components/NotFound'

import LanguageContext from './context/LanguageContext'

import './App.css'

class App extends Component {
  state = {activeLanguage: 'en'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <>
          <BrowserRouter>
            <nav className="background-nav">
              <Menu />
              <Settings />
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/sports" component={Sports} />
              <Route exact path="/tvshows" component={TVShows} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </>
      </LanguageContext.Provider>
    )
  }
}

export default App
