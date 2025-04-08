'use client';

import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Modal from "@/components/modal";
import TextInput from "@/components/text_input";
import Button from './button';
import CircularLogo from './circular_logo';
import LoginModal from "./login_modal";

import { LoginRequest } from "@/types/authentication";

interface HeaderProps {
    toggleSidebar: () => void;
    sidebarOpen: boolean;
}

export const Header = ({ toggleSidebar, sidebarOpen }: HeaderProps) => {

  let sidebarButtonIcon = sidebarOpen ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />;

  let logo = <CircularLogo alt={'user_logo'} size={50}/>;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loginRequest: LoginRequest = { username, password };

  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  let buttonLogin = async () => {
    console.log("Login attempt");
  }

  let closeLoginModal = async () => {
    setLoginModalOpen(false);
  }

  let openLoginModal = async () => {
    setLoginModalOpen(true);
  }

  return (
    <>
      <header className="header">
        <div style={{ display: 'flex' }}>
          <div>
            <Button
                children={sidebarButtonIcon}
                onClick={toggleSidebar}
            />
          </div>

          <div style={{ marginLeft: 'auto' }}>
            <Button
                children={logo}
                onClick={openLoginModal}
                variant='void'
            />
          </div>
        </div>
      </header>

      <LoginModal isOpen={loginModalOpen} close={closeLoginModal}/>
    </>
  );
}

export default Header;