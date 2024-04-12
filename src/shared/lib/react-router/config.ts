export const pathKeys = {
  root: '/',
  login() {
    return pathKeys.root.concat('login/');
  },
  register() {
    return pathKeys.root.concat('register/');
  },
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
};
