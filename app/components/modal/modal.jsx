require('./modal.scss');
import { connect } from 'react-redux'
import React from 'react';
import $ from 'jQuery';

class Modal extends React.Component {
    calcPos() {
        let modal = $(this.el).find('.dizzy-modal');
        let width = $(window).width();
        let height = $(window).height();
        let top = (height - modal.outerHeight()) / 2;
        let left = (width - modal.outerWidth()) / 2;

        modal.css({top: top, left: left});
    }

    constructor(props) {
        super(props);
    }
    
    

    componentDidUpdate(nextProps) {    
        
        this.calcPos();
        
    }

    render() {
        return (
            <div ref={(el) => this.el = el} className="modal-container" style={{display: this.props.visible === true ? 'block' : 'none'}}>
                <div className="overlay" onClick={this.props.onClick}>
                </div>
                <div className="dizzy-modal">
                    <h2>{this.props.title}</h2>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {   
        visible: state.showMovie  
    }
}



export default Modal =connect(mapStateToProps)(Modal);