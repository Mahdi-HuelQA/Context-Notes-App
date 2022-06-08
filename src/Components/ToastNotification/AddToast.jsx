import React,{useState, useEffect} from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Toast.css'
  import { useAuth0 } from '@auth0/auth0-react';

  function ToastButton ({handleSaveClick}){
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [setUserMetadata] = useState(null);
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
        <button data-testid='toastbtn' className="toast-btn" onClick={handleSaveClick}>Add a Note {user.nickname}</button>
        <ToastContainer className="Toast" />
      </div>
    )
    )
  }
  export default ToastButton