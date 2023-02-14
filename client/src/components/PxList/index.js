import React from 'react';

const PxList = ({ participants }) => {
    if (!participants.length) {
        return <h1>NO participants</h1>;
    }

    return(
        <div>
            {participants &&
            participants.map(px => (
                <div>
                    {px.firstName}
                </div>
            ))}
        </div>
    )
};

export default PxList;