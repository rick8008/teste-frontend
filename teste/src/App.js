import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery';
import Localinfo from './Localinfo';
import ReactDOM from 'react-dom';
import Dadoscnpj from './Dadoscnpj';

class App extends Component {
	



	pesquisa() {

		var cnpj_data= null;
	  	var cnpj =  $('.cnpj').val();
	  	var cnpjs = JSON.parse(localStorage.getItem('cnpjs'));
	  
	  	if(cnpjs === null){var nulo=true; var tem_memoria=false;}
	  	else{
	  		var nulo=false;
	  		var i = 0
	  		while (i < cnpjs.length) {
	  			if(cnpj == cnpjs[i].cnpj){
	  				cnpj_data = cnpjs[i];
	  				localStorage.setItem('cnpj_data', JSON.stringify(cnpj_data));
	  			}
	    		i++;
			}
			if(cnpj_data === null){
				var tem_memoria=false;
			}else{
				var tem_memoria=true;
			}

	  	}
	  	
	  	if(nulo === true ||tem_memoria === false ){
	  		$.get( "https://5ab2810762a6ae001408c26e.mockapi.io/api/dados-empresa/empresa?search="+cnpj, function( data ) {
				if(nulo === true){
					cnpjs = [data[0]];
					localStorage.setItem('cnpjs', JSON.stringify(cnpjs));
					localStorage.setItem('cnpj_data', JSON.stringify(data[0]));
					return data[0];
				}
				if(tem_memoria === false){
					cnpjs.push(data[0]) ;
					localStorage.setItem('cnpjs', JSON.stringify(cnpjs));
					localStorage.setItem('cnpj_data', JSON.stringify(data[0]));
					return data[0];
				}
				
			});
	  	} 
	  	
	  	setTimeout(function() {ReactDOM.render(<Dadoscnpj />, document.getElementById('block2'));
	  	ReactDOM.render(<Localinfo />, document.getElementById('block3'));},1000);
	  	
	}
	
	
	ui_pesquisa(){
		return (
	      <div className="App">
	     	<Jumbotron>
	        <h2>Cnpj :</h2>  
	        <input className='cnpj'></input> 
	        <br></br><Button onClick={this.pesquisa}>Pesquisar</Button>
	      </Jumbotron>
	      </div>

	    );
	}




	render() {
	    return this.ui_pesquisa();
	}

}

export default App;


