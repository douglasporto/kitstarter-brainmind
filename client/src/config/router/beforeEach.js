import store from '../store';
import { localStorageGetItem } from '../utils/local';

const beforeEach = (to, from, next) => {
  let bmToken = store.state.token;

  /**
   * If there's no token stored in the state
   * then check localStorage:
   */
  if (bmToken === '') {
    const localStoredToken = localStorageGetItem('token');
    const localStoredUser = localStorageGetItem('user');
    const localStoredCarteira = localStorageGetItem('carteira');

    /**
     * Do we have token and user local stored?
     * If so then use it!
     */
    if (
      localStoredToken !== undefined &&
      localStoredToken !== null &&
      localStoredUser !== undefined &&
      localStoredUser !== null
    ) {
      bmToken = localStoredToken.token;
      store.dispatch('setToken', bmToken);
      store.dispatch('setUser', localStoredUser.user);
      store.dispatch('carteira/setCarteira', localStoredCarteira.carteira);
    }
  }
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let hasUser = false;
    if (store.state.token) {
      hasUser = true;
    }
    if (hasUser === true) {
      if (to.fullPath === '/') {
        next({ name: 'dashboardMain' });
      } else {
        next();
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
};

export default beforeEach;
