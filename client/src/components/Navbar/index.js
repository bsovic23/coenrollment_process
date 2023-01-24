import React from 'react';

function Navbar() {
    return(
        <section class="navbar">
            <ul class="navbar-choices">
                <li><a href="/">Home</a></li>
                <li><a href="/Add">Add Screening Participant</a></li>
                <li><a href="/Check">Check Participant for Enrollment</a></li>
                <li><a href="/Stats">Site Stats</a></li>
                <li><a href="/Submit">Submit Error/Question</a></li>
            </ul>
        </section>
    )
};

export default Navbar;