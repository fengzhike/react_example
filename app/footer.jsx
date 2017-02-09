var React = require('react');
var ReactDOM = require('react-dom');

export default class footer extends React.Component{
    render(){
        return <h1 className = 'footer'>{this.props.content}1</h1>
    }
}
