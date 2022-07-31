import axios from 'axios';

export const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // k get services -n ingress-nginx
    // 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the client
    return axios.create({
      baseURL: '/',
    });
  }
};
