import React from 'react';
import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server
    // request should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser

    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
      }
    );

    return data;
  } else {
    // we are on the client
    // request should be made to http://localhost:3000/api/users/currentuser
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
};

export default LandingPage;
