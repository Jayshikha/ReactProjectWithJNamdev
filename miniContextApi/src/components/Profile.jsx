import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    return (
        <>
            {!user ? <div>Please Login</div> : <div>Welcome {user}</div>}
        </>
    )
}

export default Profile;
