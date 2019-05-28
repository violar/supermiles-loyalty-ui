import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import { Navigation } from './components/NavigationComponent';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div className="app">
              <Navigation />
                <div className="inner-container">
                  <Main />
                </div>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }

}

export default App;