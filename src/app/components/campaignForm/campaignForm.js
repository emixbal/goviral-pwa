import React, {Component} from "react";

export default class CamapignForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        campaignName: '',
        campaignTitle: '',
        file: '',
        imagePreviewUrl: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
  }
  componentDidMount(){
    this.setState({campaignName:this.props.location.state.campaignName})
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.campaignName));
  }

  handleTestButton(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(e.target.files);
    const files = e.target.files
    console.log(files[0]);
    // console.log(reader);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
    }

    console.log(this.state);

    return (
      <div>
        <h1 className="h2 text-center mt-3">Campaign From</h1>
        <h3>Campaign: {this.state.campaignName}</h3>
        <hr />
        <div className="row">
          <div className="col-lg-4">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text" className="form-control" placeholder="Campaign Title"
                  value={this.state.campaignTitle} onChange={(event) => this.setState({campaignTitle:event.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Short Description</label>
                <textarea
                  className="form-control"
                  value={this.state.description} onChange={(event) => this.setState({description:event.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Image</label>
                <input
                  type="file" className="form-control"
                  value={this.state.image} onChange={this.handleImageChange}
                />
              </div>
              <button onClick={this.handleTestButton}>test button</button>
          </div> {/* .col-lg-4 */}
          <div className="col-lg-8">
            <h3>title: {this.state.campaignTitle}</h3>
            <p>{this.state.description}</p>
             {$imagePreview}
          </div>{/* .col-lg-8 */}
        </div>{/* .row */}
      </div>
    );
  }
}
