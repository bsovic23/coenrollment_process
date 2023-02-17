import React from 'react';

import PxList from '../../components/PxList';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_PX } from '../../utils/queries';

const Participants = () => {

    const { loading, data } = useQuery(QUERY_ALL_PX);

    const getParticipants = data?.getParticipants || {};

    console.log(getParticipants);

    return(
        <section>
            <div>
                <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <PxList getParticipants={getParticipants} />
                )}
                </div>
            </div>
        </section>
    )
};

export default Participants;