require('./css/index')
require('./css/a')

var React = require('react');
var ReactDOM = require('react-dom');
import Header from './header';
import Footer from './footer';

var Hello = React.createClass({
    render(){
        return <p>欢迎来到创新学堂1</p>
    }
})




var MainContent = React.createClass({
    render(){
        var title = '这样333333333';
        var foot = '差不多就行了啊，别闹了';
        return <div>
            <Header content = {title}/>
            <Hello />
            <Footer content = {foot} />
        </div>
    }
})

var oDiv = document.createElement('div');
document.body.appendChild(oDiv);

ReactDOM.render(<MainContent />,oDiv)