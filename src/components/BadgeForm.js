import React, { Component } from 'react';

class BadgeForm extends Component {
  handleChange = e => {
    console.log({
      value: e.target.value,
      name: e.target.name
    });
  }; 

  handelClick = e => {
    console.log('Se cliqueó el botón')
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('El formulario se envió')
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>
          <button onClick={this.handelClick} className="btn btn-primary">Guardar</button>
        </form>
      </div>
    )
  }
}
 
export default BadgeForm;