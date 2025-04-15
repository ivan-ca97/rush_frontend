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
        try {
            const loginRequest: LoginRequest = { username, password }

            const response = await login(loginRequest)
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