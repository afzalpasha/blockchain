import React, {Component} from 'react'

import {Route} from 'react-router-dom';


import BlockHome from './components/BlockHome'
import TransactionResults from './components/TransactionResults'


class Main extends Component {
 
    state = { loading: true }

    componentDidMount() {
      //console.log('main function...',this.props.booking({source:'hyd',startDate:'17/08/2019'}))

        
    }

    render() {
        return ( 
        <div className="App">
         <Route exact path = "/" render={() => (
                 <div>
                      <BlockHome {...this.props}></BlockHome>
                 </div>

            )}/>
        <Route exact path = "/results/:id" render={() => (
                 <div>
                     <TransactionResults {...this.props}> </TransactionResults>
                 </div>

            )}/>
              
            </div>
        
        )
    }

}


export default Main