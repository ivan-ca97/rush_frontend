"use client"

import {useState} from "react";

import Modal from "@/components/modal";
import TextInput from "@/components/text_input";
import Button from "@/components/button";

import { login } from "@/services/authentication";
import { LoginRequest } from "@/types/authentication";

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    let buttonLogin = async () => {
        // try {
        //   const response = await fetch('http://127.0.0.1:8000/authentication/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, password }),
        //   });

        //   if (!response.ok) {
        //     console.error('Error en el login');
        //     return;
        //   }

        //   const data = await response.json();

        //   const { token } = data;

        //   console.log('Login exitoso:', data);

        //   localStorage.setItem("token", token)
        // } catch (error) {
        //   console.error('Error al conectar:', error);
        // }

        try {
            const loginRequest: LoginRequest = { username, password }

            const response = await login(loginRequest)

            console.log('Token:', response.token);
        } catch (error) {
            console.error('Error 2:', error);
        }
    }

    return (
        <Modal isOpen={true} onClose={() => void {}}>
            <h3 className="text-xl font-bold">Login</h3>
            <TextInput value={username} onChange={setUsername} placeholder="Username"/>
            <TextInput value={password} onChange={setPassword} />
            <Button onClick={buttonLogin}>Login</Button>
        </Modal>
    );
}

export default Login;