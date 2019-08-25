import React ,{Component} from 'react';

import {withRouter} from 'react-router-dom';

class BlockHome extends Component {
	
	constructor(props) {
		 super(props);
		this.state= {value:'',
					 blockresults:[]};
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount(){    	
    	if(this.props.blockresults.tx){
    		this.setState({blockresults:this.props.blockresults.tx})

    	}
    	
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }
   	handleSubmit(event) {
   		event.preventDefault();    	
    	//169566
    	this.props.fetchBlockResults(this.state.value).then(() => {

    			this.setState({blockresults:this.props.blockresults.tx})
		      	console.log(this.props.blockresults)
		      });
        
        
    }
    transactionClick(id){    	
    	this.props.history.push({pathname:`/results/${id}`})
    }
	render() {
		
		return(
			<div >	
				<form className="form-inline " onSubmit={this.handleSubmit}>				
				      <input className="form-control input-lg" type="text" value={this.state.value} 
				      placeholder="Block Id /Hash" aria-label="Search" required 
				      onChange={this.handleChange}/>
				   
				      <button className="btn btn-mdb-color btn-rounded " type="submit" >Search</button>
				
				</form>

  					<table className="table">
					  <thead>
					    <tr>
					      <th scope="col" colSpan="2" className="text-center">Transaction Id</th>
					      <th scope="col" colSpan="2" className="text-center">size</th>
					      <th scope="col" colSpan="2" className="text-center">time</th>
					      <th scope="col" colSpan="2" className="text-center">weight</th>
					      <th scope="col" colSpan="2" className="text-center">ver</th>
					      <th scope="col" colSpan="2" className="text-center">lock_time</th>
					      <th scope="col" colSpan="2" className="text-center">relayed_by</th>
					    </tr>
					  </thead>
					  <tbody>
					  {
					  	this.state.blockresults.map((item,index) => {
					  		return (
					  			<tr key={index} onClick={() => this.transactionClick(item.tx_index)} style={{cursor:'pointer'}}>
							      <th scope="row" colSpan="2" className="text-center" style={{color:'blue'}} ><u>{item.tx_index}</u></th>
							      <td colSpan="2" className="text-center">{item.size}</td>
							      <td colSpan="2" className="text-center">{item.time}</td>
							      <td colSpan="2" className="text-center">{item.weight}</td>
							      <td colSpan="2" className="text-center">{item.ver}</td>
							      <td colSpan="2" className="text-center">{item.lock_time}</td>
							      <td colSpan="2" className="text-center">{item.relayed_by}</td>
							    </tr>
					  		)
					  	})
					  }
					    
					    
					    
					  </tbody>
					</table>
				

			</div>    

			)
	}
}

export default withRouter(BlockHome)