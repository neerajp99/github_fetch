import React, { Component } from "react";

class Form extends Component {
  render() {
    const { getUser } = this.props;
    return (
      <div className="fetch_form_data" onSubmit={getUser}>
        <form className="fetch_form">
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            className="fetch_form_input"
          />
          <br />
          <button className="fetch_form_button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
