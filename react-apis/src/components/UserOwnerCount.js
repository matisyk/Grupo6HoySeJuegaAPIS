import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: "",
      userDetails: "",
      apellido: ""
    }
  }

  apiCall(url, consecuencia){
    fetch(url)
      .then(res => res.json())
      .then(data => consecuencia(data))
      .catch(err => console.log(err))
  }

  render(){
    let usersCount = this.state.user;
    let userData = this.state.userDetails;
    let apellido = this.state.apellido;
    let contenedor // declaro un contenedor
    let users
    let apell
        if(usersCount === "") {
            contenedor = <p>Cargando..</p> // si aun no cargo la info -> cargando...
        } else { contenedor = usersCount;
                  users = userData;
                  apell = apellido;
                  return(
                    <div>
                      <br/>
                      <br/>
                      <h2>USER OWNERS</h2>
                      <h3>{`Cantidad de User Owner: ${contenedor}`}</h3>
                      <h3>{`Nombre del ultimo Owner: ${users} ${apell}`}</h3>
                    </div>
                  )
                    
        }

  }

  componentDidMount(){
    console.log("Me monte");
    this.apiCall("http://127.0.0.1:8080/apisUserOwner/", this.mostrarApi);
  }

  mostrarApi = (data) => {
    const users = data.meta.count;
    console.log(users);
    const usersDetails = data.data[data.meta.count -1].nombre;
    console.log(usersDetails);
    const apellido = data.data[data.meta.count -1].apellido;
    this.setState(
      {
        user: users,
        userDetails: usersDetails,
        apellido: apellido
      }
    )
  }

  componentDidUpdate(){
    console.log("Me actualice")
  }
}

export default App;
