import React, {Component} from "react"

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(JSON.stringify(this.state, null, 4));
        event.preventDefault();
    }

    render() {
    return (
      <div className="row" style={styles.login}>
          <div className="col-lg-6 offset-lg-3">
              <div className="card" >
                  <div className="card-header" >
                      Login
                  </div>
                  <div className="card-body" >
                      <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                          <label>Email address:</label>
                          <input type="text" className="form-control" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} />
                        </div>
                        <div className="form-group">
                          <label>Password:</label>
                          <input type="password" className="form-control" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})}  />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                      </form>
                  </div>
              </div>

          </div>
      </div>
    );
  }
}

const styles = {
  login: {
    marginTop:'20px',
    marginBottom:'50px'
  }
}
