import React from 'react';

const PxList = ({ getParticipants }) => {
    if (!getParticipants.length) {
        return <h1>NO participants</h1>;
    }

    return(
        <div>
            {getParticipants &&
            getParticipants.map(px => (
                <div>
                    {px.firstName}
                </div>
            ))}
        </div>
    )
};

export default PxList;