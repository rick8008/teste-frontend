import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery'


class Dadoscnpj extends Component {
	
	

	render() {
		

		var cnpj_data = JSON.parse(localStorage.getItem('cnpj_data'));
		console.log(cnpj_data);
			
		if(cnpj_data !== null){
			return (
		      	<div className="App">
		      	<Jumbotron>
		        <p>id :{cnpj_data.id} </p>
		        <p>cnpj :{cnpj_data.cnpj} </p>
		        <p>nome :{cnpj_data.nome} </p>
		        <p>data_fundacao :{cnpj_data.data_fundacao} </p>
		        <p>situacao_receita :{cnpj_data.situacao_receita} </p>
		        <p>situacao_receita_data :{cnpj_data.situacao_receita_data} </p> 
		        </Jumbotron> 
		      	</div>
			 
	    	);
		}
		else{

			return (
		      	<div className="App">
		      	<Jumbotron>
		        <p>id : </p>
		        <p>cnpj :</p>
		        <p>nome :</p>
		        <p>data_fundacao :</p>
		        <p>situacao_receita :</p>
		        <p>situacao_receita_data :</p>
		        </Jumbotron>  
		      	</div>
			 
	    	);
		}
	    
	}

}

export default Dadoscnpj;


