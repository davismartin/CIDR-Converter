var React = require('react');
var Cidr = require('../helper/CIDR');
var Validator = require('validator');
var Classnames = require('classnames');

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
			endIP: '',
			error: false,
			errorMessage: '',
			validation: Classnames("rs-control-group", {'error': false})
		}
	},
	setRangeStart: function(ref) {
			this.state.startIP = ref;
	},
	setRangeEnd: function(ref) {
			this.state.endIP = ref;
	},
	validate: function(ip) {
		return Validator.isIP(ip);
	},
	convertIPs: function() {
		this.state.cidrIPs = [];
		this.state.error = false;

		if(this.validate(this.state.startIP.value,this.state.endIP.value)) {
			this.setState({validation: Classnames("rs-control-group", {'error': this.state.error})});
			this.setState({cidrIPs: Cidr().IPtoCIDR(this.state.startIP.value, this.state.endIP.value)});
		} else {
			this.state.error = true;
			this.setState({validation: Classnames("rs-control-group", {'error': this.state.error})});
		}
	},
	render: function() {
		return (
			<div style={{padding:'20px'}}>
				<h2 className="rs-page-title">
					CIDR Converter
				</h2>
				<div className={this.state.validation}>
					<span style={labelSpan}>Range</span>
					<input type="text" placeholder="Range Start"  ref={this.setRangeStart} />
					<span style={labelSpan}>to</span>
					<input type="text" placeholder="Range End"  ref={this.setRangeEnd} />
					<span className="rs-validation-block">
						<i className="rs-validation-indicator"></i>
						Validation error message
					</span>
				</div>
				<Button onClick={this.convertIPs} type="secondary" style={{marginLeft: '4%'}}>Convert</Button>
				<div>
					<ul style={{padding: '2%'}}>
						{this.state.cidrIPs.map && this.state.cidrIPs.map(function(ip, index) {
							return <li key={index} style={{listStyle: 'none'}}> {ip} </li>
						})}
					</ul>
				</div>
			</div>
		)}
});

module.exports = Main;
