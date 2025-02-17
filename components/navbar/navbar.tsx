'use client'


import { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import Search from "./search";
import SignInButton from "./sign-in-button";
import SignUpButton from "./sign-up-button";
import Modal from "../ui/modals/modal";
import AuthContent from "./auth-content";
import Avatar from "./avatar";
import NotificationIcon from "./notification-icon";
import Submit from "./submit";

interface NavbarProps {
  authenticatedUser?: any;
  notifications?: any;
  products?: any;
}

const Navbar: React.FC<NavbarProps> = ({
  authenticatedUser,
  notifications,
  products,
}) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleButtonClick = () => {
    setAuthModalVisible(true);
  };

  return (
    <div className="border-b py-2 md:py-0 px-4 md:px-6 mt-4"> {/* Added mt-4 for margin-top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <h1 className="hidden lg:block text-xl font-semibold ml-2">ProductMe</h1>
          <Search />
        </div>

        <div className="absolute right-1/2 translate-x-1/2 transform z-10">
          <Menu />
        </div>

        <div className="flex items-center text-sm space-x-6 cursor-pointer">
          {authenticatedUser ? (
            <>
              <Submit products={products} authenticatedUser={authenticatedUser} />
              <NotificationIcon notifications={notifications} />
            </>
          ) : (
            <div
              onClick={handleButtonClick}
              className="flex items-center space-x-6 cursor-pointer text-sm"
            >
              <SignInButton />
              <SignUpButton />
            </div>
          )}
          <Avatar authenticatedUser={authenticatedUser} /> {/* Always show Avatar */}
        </div>

        <Modal visible={authModalVisible} setVisible={setAuthModalVisible}>
          <AuthContent />
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
