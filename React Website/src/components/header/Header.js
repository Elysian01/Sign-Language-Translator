import React from 'react';
import '../../css/style.css'
class Header extends React.Component {
    render() {
        return (<div>

            <br></br>
            <h1 className="myheading" >{this.props.text}</h1>
            <br></br>
        </div>

        )
    }
}
export default Header;