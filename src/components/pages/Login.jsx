/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';
import classes from './Login.module.css';

const Login = ({
	usernameText,
	passwordText,
	redirect,
	usernameTextCB,
	passwordTextCB,
	usernameBackspaceCB,
	passwordBackspaceCB,
	authCB,
	isAuth,
	error,
}) => {
	isAuth ? redirect() : null;

	const submitFormHandler = () => {
		authCB({ email: usernameText, password: passwordText });
	};

	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		usernameTextCB(data);
	};

	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		passwordTextCB(data);
	};

	const usernameKeyUpHandler = ({ keyCode }) => {
		if (keyCode === 8) {
			usernameBackspaceCB();
		}
	};

	const passwordKeyUpHandler = ({ keyCode }) => {
		if (keyCode === 8) {
			passwordBackspaceCB();
		}
	};

	return (
		<Segment>
			{error && !isAuth ? (
				<div className={classes.error}>Имя пользователя или пароль введены не верно </div>
			) : null}

			<Form onSubmit={submitFormHandler}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Username(max@test.com)"
						placeholder="username"
						onChange={usernameInputHandler}
						onKeyUp={usernameKeyUpHandler}
						value={usernameText}
					/>
					<Form.Input
						fluid
						label="Password(12345)"
						placeholder="password"
						onChange={passwordInputHandler}
						onKeyUp={passwordKeyUpHandler}
						value={passwordText}
					/>
				</Form.Group>
				<Button type="submit" disabled={!(!!usernameText && !!passwordText)}>
					Submit
				</Button>
			</Form>
		</Segment>
	);
};

export default Login;

Login.propTypes = {
	usernameText: PropTypes.string.isRequired,
	passwordText: PropTypes.string.isRequired,
	usernameTextCB: PropTypes.func.isRequired,
	passwordTextCB: PropTypes.func.isRequired,
	usernameBackspaceCB: PropTypes.func.isRequired,
	passwordBackspaceCB: PropTypes.func.isRequired,
	authCB: PropTypes.func.isRequired,
	redirect: PropTypes.func.isRequired,
	isAuth: PropTypes.bool.isRequired,
};
