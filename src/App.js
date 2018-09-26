import React, { Component } from 'react';
import ReferencesList from './components/ReferencesList';
import {PROD_URL} from './constants/urls'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { references: []}
  }

  componentDidMount() {
    this.getReferences();
  }

  getReferences() {
    const filters = {
      "include": {
        "relation": "images",
        "scope": {
          "order": "order ASC",
          "limit": 1
        }
      },
      "limit": 10
    }
    
    fetch(PROD_URL + 'references?filter=' + JSON.stringify(filters), {headers: { "Authorization" : "Bearer ZGV2ZWxvcA=="}})
      .then((response) => {
        return response.json()
      })
      .then((references) => {
        this.setState({references})
      })
  }

  render() {

    if (this.state.references.length > 0) {
      return (
        <div className="container-fluid">
          <ReferencesList list={this.state.references} />
        </div>
      )
    } else {
      return <p className="text-center">...</p>
    }
  
  }
}

export default App;
