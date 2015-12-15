var React = require('react');
var Button = require('canon-react').Button;

var labelSpan = {
  padding: '10px',
  verticalAlign: 'text-bottom'
};

var Main = React.createClass({
  convertIPs: function() {
    alert("hello")
  },
  render: function() {
    return (
      <div style={{padding:'20px'}}>
        <h2 className="rs-page-title">
          CIDR Converter
        </h2>
        <div className="rs-control-group">
          <label>
            <span style={labelSpan}>Range</span>
            <input type="text" placeholder="Range Start" />
            <span style={labelSpan}>to</span>
            <input type="text" placeholder="Range End" />
          </label>
        </div>
        <Button onClick={this.convertIPs} type="secondary" style={{marginLeft: '4%'}}>Convert</Button>
      </div>
    )}
});

module.exports = Main;
