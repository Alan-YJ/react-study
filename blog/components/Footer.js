import React, { Component } from 'react';
import '../static/style/components/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='footer-wrap'>
                <div>系统由 React+Node+Ant Design驱动</div>
                <div>frontend-social.com</div>
            </div>
        );
    }
}

export default Footer;