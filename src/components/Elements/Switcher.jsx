import React from 'react';

var bgimg = require('./../../images/background/bg-boxed.jpg');

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stylePath: './assets/css/skin/skin-1.css' };
    }

    componentDidMount = () => {
        var homepage3 = /\/homepage3/i;

        if (homepage3.test(window.location.href)) {
            document.body.classList.add('boxed');
            document.body.classList.add('bg-repeat');
            document.body.id = 'bg';
            document.body.style.backgroundImage = "url(" + bgimg + ")";
        } else {
            document.body.classList.remove('boxed');
            document.body.classList.remove('bg-repeat');
            document.body.id = '';
            document.body.style.backgroundImage = "";
        }
        this.setState({ stylePath: './assets/css/skin/skin-1.css' });

    }

    render() {
        return (
            <>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
            </>
        );
    };
};

export default Switcher;