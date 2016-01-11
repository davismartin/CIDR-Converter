var React = require('react');
var Cidr = require('../helper/CIDR');
var Button = require('canon-react').Button;

var labelSpan = {
  padding: '10px',
  verticalAlign: 'text-bottom'
};

var Main = React.createClass({
  getInitialState: function() {
    return{
      cidrIPs: [],
      startIP: '',
      endIP: ''
    }
  },
  setRangeStart: function(ref) {
    this.state.startIP = ref;
  },
  setRangeEnd: function(ref) {
    this.state.endIP = ref;
  },
  convertIPs: function() {
    this.state.cidrIPs = [];
    this.setState({cidrIPs: Cidr().IPtoCIDR(this.state.startIP.value, this.state.endIP.value)});
  },
  render: function() {
    return (
      <div style={{padding:'20px'}}>
        <h2 className="rs-page-title">
          CIDR Converter
        </h2>
        <div className="rs-control-group">
          <span style={labelSpan}>Range</span>
          <input type="text" placeholder="Range Start" ref={this.setRangeStart} />
          <span style={labelSpan}>to</span>
          <input type="text" placeholder="Range End" ref={this.setRangeEnd} />
        </div>
        <Button onClick={this.convertIPs} type="secondary" style={{marginLeft: '4%'}}>Convert</Button>
        <div>
          <ul style={{padding: '2%'}}>
            {this.state.cidrIPs.map && this.state.cidrIPs.map(function(ip, index) {
              console.log(ip);
              console.log(index);
              return <li key={index} style={{listStyle: 'none'}}> {ip} </li>
            })}
          </ul>
        </div>
      </div>
    )}
});

module.exports = Main;
