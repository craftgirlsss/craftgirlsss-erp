"use client";
import React from "react";
import '/dashboard/style.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">username: <input type="text" /></label>
        <div></div>
        <label htmlFor="">password: <input type="password" /></label>
        <div></div>
        <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
