import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = (props) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            email: '',
            password: '',
        });
    };

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={state.email}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={state.password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <CustomButton type="submit"> Sign in </CustomButton>
            </form>
        </div>
    );
};

export default SignIn;
