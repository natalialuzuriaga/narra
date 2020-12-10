import React, { Component } from 'react';
import RegisterAccount from './register-account.component';
import RegisterProfile from './register-profile.component';
import RegisterConfirm from './register-confirm.component';
import RegisterSuccess from './register-success.component';

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            username: '',
            password: '',
            personalityType: '',
            bio: '',
            img: '',
            snapchat: '',
            instagram: '',
            facebook: '',
            discord: '',
        }
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName,
            email, confirmEmail,
            username, password,
            personalityType, bio, img,
            snapchat, instagram,
            facebook, discord } = this.state;
        const values = { firstName, lastName,
            email, confirmEmail,
            username, password,
            personalityType, bio, img,
            snapchat, instagram,
            facebook, discord };
        
        switch (step) {
            case 1:
                return (
                <RegisterAccount
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 2:
                return (
                <RegisterProfile
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 3:
                return (
                <RegisterConfirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                );
            case 4:
                return <RegisterSuccess />;
            default:
                console.log('Team Narra!');
        }
    }
}