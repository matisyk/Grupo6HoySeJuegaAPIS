import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Canchas extends Component{
    constructor(props){
      super(props);
      this.state = {
        userDetails: "",
        count: ""
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
        let count = this.state.count;
        let users
        let total
        if(userData === "") {
            users = <p>Cargando..</p> // si aun no cargo la info -> cargando...
        } else { 
            users = userData.map(data => (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Capacidad</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{data.id}</td>
                        <td>{data.identificacion}</td>
                        <td>{data.capacidad}</td>
                        <td>${data.valor}</td>
                        </tr>
                    </tbody>
                </Table>
            ))
        }
        total = count;
        return (
            <div>
                <br/>
                <br/>
                <h2>CANCHAS</h2>
                <h3>Cantidad de Canchas: {total}</h3>
                {users}
            </div>
        )

    }
  
    componentDidMount(){
      console.log("Me monte");
      this.apiCall("http://127.0.0.1:8080/apisCancha/", this.mostrarApi);
    }
  
    mostrarApi = (data) => {
      const usersDetails = data.data;
      console.log(usersDetails);
      const count = data.meta.count;
      this.setState(
        {
          userDetails: usersDetails,
          count: count
        }
      )
    }
  
    componentDidUpdate(){
      console.log("Me actualice")
    }
  }
  
  export default Canchas;