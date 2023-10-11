import React from 'react'
import {Footer} from 'flowbite-react'
import Logo from '../common/Logo'
import { Link } from "react-router-dom";
import '../../pages/user/test.css'


const footerstyle = {
    margin : '20px'
}
function FooterUser() {
    return (
        <Footer container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    {/* <Footer.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    /> */}
                    <Logo size={1.5} />

                    <Footer.LinkGroup style={footerstyle}>
                        <Link className='footer-link' to="/">
                            About
                        </Link>
                        <Link className='footer-link' to="/Privacy">
                            Privacy Policy
                        </Link>
                        <Link className='footer-link' to="/terms">
                            Terms and Conditions
                        </Link>
                        <Link className='footer-link' to="/refund">
                            Refund Policy
                        </Link>
                        <Link className='footer-link' to="/contact">
                            Contact
                        </Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="/"
                    by="Standard Security Solutions ™"
                    year={new Date().getFullYear()}
                />
            </div>
        </Footer>
    )
}

export default React.memo(FooterUser)