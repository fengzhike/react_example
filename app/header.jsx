var React = require('react');
var ReactDOM = require('react-dom');

export default class Header extends React.Component{
    render(){
        return <h1>12{this.props.content}</h1>
    }
}