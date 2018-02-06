import React, {Component} from "react";
import Link from "pawjs/src/components/link";


export default class Campaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
        campaignName: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      alert(JSON.stringify(this.state.campaignName));
      event.preventDefault();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="h2 text-center mt-6">Campaign Page</h1>
        <p className="text-center">campaign direction here</p>
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={this.handleSubmit} >
            <div className="row">
              <hr />
              <div className="col-lg-9">
                  <input
                    type="text" className="form-control"
                    id="campaign_name" placeholder="Campaign Name"
                    value={this.state.campaignName} onChange={(event) => this.setState({campaignName:event.target.value})}
                  />
              </div>
              <div className="col-lg-3">
                  <Link className="btn btn-primary btn-block" to={{
                    pathname: '/campaign-form',
                    state: { campaignName: this.state.campaignName }
                  }}>Create
                  </Link>
              </div>
            </div>
            <button>hallo</button>
          </form>
        </div>
      </div>
    );
  }
}
