export default function authHeader() {
    const user = JSON.parse(sessionStorage.getItem('user'));
  
    if (user && user.jwttoken) {
      return {
        Authorization: 'Bearer ' + user.jwttoken 
      };
    } else {
      return {};
    }
  }