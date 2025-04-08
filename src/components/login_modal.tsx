'use client';

import {useState} from "react";

import Modal from "@/components/modal";
import TextInput from "@/components/text_input";
import Button from './button';

import { login } from "@/services/authentication";
import { LoginRequest } from "@/types/authentication";

interface LoginModalProps {
    isOpen: boolean;
    close: () => void;
}

export const LoginModal = ({isOpen, close}: LoginModalProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    let buttonLogin = async () => {
        try {
            const loginRequest: LoginRequest = { username, password }

            const response = await login(loginRequest)

            console.log('Token:', response.token);
        } catch (error) {
            console.error('Error 2:', error);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={close}>
            <h3 className="text-xl font-bold">Login</h3>
            <TextInput value={username} onChange={setUsername} placeholder="Username"/>
            <TextInput value={password} onChange={setPassword} />
            <Button onClick={buttonLogin}>Login</Button>
        </Modal>
    )
}

export default LoginModal;