import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Escuelitas extends Component{
    constructor(props){
      super(props);
      this.state = {
        userDetails: ""
      }
    }
  
    apiCall(url, consecuencia){
      fetch(url)
        .then(res => res.json())
        .then(data => consecuencia(data))
        .catch(err => console.log(err))
    }
  
    render(){
        let userData = this.state.userDetails;
        let users
        if(userData === "") {
            users = <p>Cargando..</p> // si aun no cargo la info -> cargando...
        } else { 
            users = userData.map(data => (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Categoria</th>
                        <th>Alumnos</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{data.id}</td>
                        <td>{data.categoria}</td>
                        <td>{data.alumnos}</td>
                        <td>${data.valor}</td>
                        </tr>
                    </tbody>
                </Table>
            ))
        }
        return (
            <div>
                <br/>
                <br/>
                <h2>ESCUELITAS</h2>
                {users}
            </div>
        )

    }
  
    componentDidMount(){
      console.log("Me monte");
      this.apiCall("http://127.0.0.1:8080/apisEscuelita/", this.mostrarApi);
    }
  
    mostrarApi = (data) => {
      const usersDetails = data.data;
      console.log(usersDetails);
      this.setState(
        {
          userDetails: usersDetails
        }
      )
    }
  
    componentDidUpdate(){
      console.log("Me actualice")
    }
  }
  
  export default Escuelitas;