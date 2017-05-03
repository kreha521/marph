import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap'

var Contact = React.createClass({
  getInitialState() {
    return {
      name: "",
      orgName: ""
    };
  },
  changeName(e) {
    this.setState({name: e.target.value});
  },
  changeOrgName(e) {
    this.setState({orgName: e.target.value});
  },
  changeOrgName(e) {
    this.setState({free: e.target.value});
  },
  render() {
    return (
        <div>

        <form>
            <div class="form-group" class="col-xs-6">
                <input id="txtName" type="text" value={this.state.name} onChange={this.changeName} placeholder="氏名を記入" />
            </div>
            <div class="form-group" class="col-xs-6">
                <input id="txtCompany" type="text" value={this.state.orgName} onChange={this.changeOrgName} placeholder="組織名を記入" />
            </div>
            <div class="form-group" class="col-xs-6">
                <textarea value={this.state.free} onChange={this.changeOrgName} placeholder="お問い合わせ内容をご記入ください" />
            </div>
            <div class="pull-right">
                <Button bsStyle="primary" type="submit" class="btn"><Glyphicon glyph="envelope" />送信</Button>
            </div>
        </form>
        </div>
    );
  }
});

export default Contact