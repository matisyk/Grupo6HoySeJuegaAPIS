import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: ""
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
    let contenedor // declaro un contenedor
        if(usersCount === "") {
            contenedor = <p>Cargando..</p> // si aun no cargo la info -> cargando...
        } else { contenedor = usersCount;
                  return(
                    <div>
                    <h1>{`Cantidad de User Players: ${contenedor}`}</h1>
                    </div>
                  )
                    
        }

    return (
      <div className="container">
          <div className="row text-center">
                {contenedor}                    
          </div>
      </div>
    )
  }

  componentDidMount(){
    console.log("Me monte");
    this.apiCall("http://127.0.0.1:8080/apisUserPlayer/", this.mostrarApi);
  }

  mostrarApi = (data) => {
    console.log(data.meta.count);
    const users = data.meta.count;
    this.setState(
      {
        user: users
      }
    )
  }

  componentDidUpdate(){
    console.log("Me actualice")
  }
}

export default App;
