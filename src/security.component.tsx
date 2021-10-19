import { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

export function Security() {
  const [user, setUser]: any = useState({});

  useEffect(() => {
    const keycloak = Keycloak('/keycloak.json');
    keycloak
      .init({ onLoad: 'login-required', adapter: 'default' })
      .then((authenticated) => {
        console.log(keycloak);

        keycloak.loadUserInfo().then((userInfo) => {
          console.log(userInfo);
          setUser({ ...userInfo, token: keycloak.token });
        });
      });
  }, []);

  return (
    <div>
      <h3>Page Security</h3>
      <hr />
      Hello, {user.name}
      <hr />
      This is your token:
      <br />
      <textarea rows={10} cols={50} value={user.token}>
        {user.token}
      </textarea>
      <hr />
    </div>
  );
}
