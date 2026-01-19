import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm">
            <div className="container">

                {/* Brand Logo - Updated to use an Image */}
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img
                        // REPLACE THIS URL WITH YOUR ACTUAL LOGO PATH
                        // Example: src="/logo.png" or import logo from '../assets/logo.png'
                        src="../src/assets/logo.jpg"
                        alt="The Demazong Logo"
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />

                    <span className="fw-black fs-3" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
                        The Demazong<span className="text-demazong">.</span>
                    </span>
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-4">
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Regional Politics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Society</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Policy</a>
                        </li>
                        <li className="nav-item">

                            <button
                                className="btn btn-demazong shadow-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#subscribeModal"
                            >
                                Subscribe
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;