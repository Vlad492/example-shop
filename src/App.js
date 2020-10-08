import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home, GoodsList, Goods, CategoriesList, CategoryList, Delivery, Aboutus,Orders,Order,Likes,Settings } from './components/exporter'
import { User } from './contexts'





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedUser: {
        token: 'qdqwdqwdqdqdq',
        name: 'Vlad Hleb',
        id: '1231231'
      }
    }
  }

  setToken(token, name, id) {
    let newUser = {
      token, name, id
    }
    this.setState({ loggedUser: newUser })
  }
  removeToken() {
    let newUser = {
      token: '',
      name: '',
      id : ''
    }
    this.setState({ loggedUser: newUser })
  }

  render() {
    return (
      <div className="App">
        <User.Provider value={{setToken : this.setToken.bind(this), removeToken : this.removeToken.bind(this), userInfo : this.state.loggedUser}}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/search/:name" component={GoodsList} exact />
              <Route path="/goods/:id" component={Goods} exact />
              <Route path="/categories" component={CategoriesList} exact />
              <Route path="/categories/:name" component={CategoryList} exact />
              <Route path="/delivery" component={Delivery} exact />
              <Route path="/aboutus" component={Aboutus} exact />
              <Route path="/orders/:userid" component={Orders} exact />
              <Route path="/orders/:userid/:orderid" component={Order} exact />
              <Route path="/likes/:userid" component={Likes} exact />
              <Route path="/settings/:userid" component={Settings} exact />
            </Switch>
        </User.Provider>
      </div>
    );
  }
}





export default App;