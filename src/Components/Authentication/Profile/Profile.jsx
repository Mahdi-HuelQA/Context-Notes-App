import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  // setup

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'mahdi-test.eu.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // const { user_metadata } = await metadataResponse.json();
        const obj = await metadataResponse.json();
        console.log(obj);

        setUserMetadata(obj.user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user]);

  return (
    isAuthenticated && (
      <div>
        <img className='UserPhoto' src={user.picture} alt='user'></img>
        {/* <h3 className='UserName'> {user.nickname}</h3> */}
      </div>
    )
  );
};

export default Profile;
