import React, { Component } from 'react';
import Avatar from 'react-avatar-edit'

export default class ProfilePic extends Component {
    constructor(props) {
        super(props)
        this.state = {
        preview: null,
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
    }
    
    onClose() {
        this.setState({preview: null})
    }
    
    onCrop(preview) {
        this.setState({preview})
    }

    onBeforeFileLoad(elem) {
        if(elem.target.files[0].size > 1024000){
        alert("File is too big!");
        elem.target.value = "";
        };
    }
    
    render() {
        return (
        <>
            <Avatar
            height={350}
            width={350}
            onCrop={this.onCrop}
            onClose={this.onClose}
            onBeforeFileLoad={this.onBeforeFileLoad}
            src={this.state.src}
            />

            <img style={{width: '200px', height: '200px'}} src={this.state.preview} alt="Preview"/>
        </>
        );
    }
}