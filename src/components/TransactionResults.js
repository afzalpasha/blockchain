import React ,{Component} from 'react';
import {Container,  Col, Row } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class TransactionResults extends Component {
	
	constructor() {
		 super(); 
		 this.state= {transactionDetails:{},transactionInputs:{},transactionOut:{}};      

    }
    componentDidMount(){
    	
    	this.props.fetchTransactionDetails(this.props.match.params.id).then(() => {
    			
		      	
		      	this.setState({transactionDetails:this.props.transactiondetails});
		      	this.setState({transactionInputs:this.state.transactionDetails.inputs[0]});
		      	this.setState({transactionOut:this.state.transactionDetails.out[0]});

		      
		      });

    }
    
	render() {
		

		return(
				<div >	
					<Container>
					  <Row style={{marginTop:'20px'}}>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Transaction ID: {this.state.transactionDetails.tx_index}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Time: {this.state.transactionDetails.time}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Size: {this.state.transactionDetails.size}
					    </Col>
					  </Row>
					  <Row style={{marginTop:'20px'}}>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Block Height: {this.state.transactionDetails.block_height}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Block Index: {this.state.transactionDetails.block_index}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Weight: {this.state.transactionDetails.weight}
					    </Col>
					  </Row>
					  <Row style={{marginTop:'20px'}}>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Version: {this.state.transactionDetails.ver}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      VIN_SZ: {this.state.transactionDetails.vin_sz}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      VOUT_SZ: {this.state.transactionDetails.vout_sz}
					    </Col>
					  </Row>
					  <Row style={{marginTop:'20px'}}>
					    <Col md={4} style={{fontWeight:'bold'}}>
					    INPUTS :   Sequence: {this.state.transactionInputs.sequence}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Script: {this.state.transactionInputs.sequence}
					    </Col>
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Witness: {this.state.transactionInputs.witness}
					    </Col>
					  </Row>
					  <Row style={{marginTop:'20px'}}>
					    <Col md={8} style={{fontWeight:'bold'}}>
					    OUTPUTS :   Address: {this.state.transactionOut.addr}
					    </Col>
					    
					    <Col md={4} style={{fontWeight:'bold'}}>
					      Value: {this.state.transactionOut.value}
					    </Col>
					  </Row>
					  <Row style={{marginTop:'20px'}}>
					    
					    <Col md={12} style={{fontWeight:'bold'}}>
					      Script: {this.state.transactionOut.script}
					    </Col>
					    
					  </Row>
					  
					</Container>
					

			</div>    

			)
	}
}

export default withRouter(TransactionResults)