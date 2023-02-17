import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <section class="navbar">
                <li><Link to="/add">Add Screening Participant</Link></li>
        </section>
    )
};

export default Navbar;