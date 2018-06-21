import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Glyphicon, Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery'
import ReactDOM from 'react-dom';

class Localinfo extends Component {
	
	
	deleta(cnpj,e){
		var cnpjs_old = JSON.parse(localStorage.getItem('cnpjs'));
		var i = 0
		var i2 = 0;
		var cnpjs = null;
  		while (i < cnpjs_old.length) {
  			if(cnpj != cnpjs_old[i].cnpj){
  				if(i2 <1){
  					cnpjs = [cnpjs_old[i]];
  					i2++;
  				}
  				else{
  					cnpjs.push(cnpjs_old[i]) ;
  				}
  				
  			}
    		i++;
		}
		if(cnpjs !== null){
			localStorage.setItem('cnpjs', JSON.stringify(cnpjs));
		}
		else{
			localStorage.removeItem('cnpjs');
		}
		ReactDOM.render(<Localinfo />, document.getElementById('block3'));
		//console.log(cnpj);

	}
	render() {
		

		var cnpjs = JSON.parse(localStorage.getItem('cnpjs'));
		var i = 0
		var rows = [];
		if(cnpjs !== null){
			while (i < cnpjs.length) {
				
				rows.push(<p>{cnpjs[i].cnpj}<Button bsStyle="danger" onClick={this.deleta.bind(this, cnpjs[i].cnpj)}><Glyphicon glyph="glyphicon glyphicon-minus" /></Button></p>);

				i++;
			}
		}
			

	    return (
	      <div className="App">
	      <Jumbotron>
	        <p>LocalStorage:</p>

			{rows}
		  </Jumbotron>
	      </div>
			 
	    );
	}

}

export default Localinfo;


