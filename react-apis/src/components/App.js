import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: "",
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
    let usersCount = this.state.user;
    let userData = this.state.userDetails;
    let contenedor // declaro un contenedor
    let users
        if(usersCount === "") {
            contenedor = <p>Cargando..</p> // si aun no cargo la info -> cargando...
        } else { contenedor = usersCount;
                  users = userData;
                  return(
                    <div>
                    <h1>{`Cantidad de User Players: ${contenedor}`}</h1>
                    <h2>{`Nombre primer Player: ${users}`}</h2>
                    </div>
                  )
                    
        }

  }

  componentDidMount(){
    console.log("Me monte");
    this.apiCall("http://127.0.0.1:8080/apisUserPlayer/", this.mostrarApi);
  }

  mostrarApi = (data) => {
    const users = data.meta.count;
    console.log(users);
    const usersDetails = data.data[0].nombre;
    console.log(usersDetails);
    this.setState(
      {
        user: users,
        userDetails: usersDetails
      }
    )
  }

  componentDidUpdate(){
    console.log("Me actualice")
  }
}

export default App;
