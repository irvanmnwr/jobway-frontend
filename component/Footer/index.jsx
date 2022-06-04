import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {

    return (
        <footer>
            <div className="container footer-content">
                <Image src="/../../images/landing/auth-logo-white.svg" alt="" width={178} height={50}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div className="footer-line"></div>
                    <div className="footer-bottom">
                        <p>2020 Jobway. All right reserved</p>
                        <div className="footer-link">
                        <Link href="#">Telepon</Link>
                        <Link href="#">Email</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
