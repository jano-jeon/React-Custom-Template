const isAuthMode = process.env.REACT_APP_AUTH_MODE === 'on';

class Utils {
  // 권한 확인
  static hasPermission(authArr, userRole) {
    // 인증 여부 설정
    if (isAuthMode) {
      /**
       * If auth array is not defined
       * Pass and allow
       */
      if (authArr === null || authArr === undefined) {
        // console.info("auth is null || undefined:", authArr);
        return true;
      }
      if (authArr.length === 0) {
        /**
         * if auth array is empty means,
         * allow only user role is guest (null or empty[])
         */
        // console.info("auth is empty[]:", authArr);
        return !userRole || userRole.length === 0;
      }
      /**
       * Check if user has grants
       */
      // console.info("auth arr:", authArr);
      /*
     Check if user role is array,
     */
      if (userRole && Array.isArray(userRole)) {
        return authArr.some((r) => userRole.indexOf(r) >= 0);
      }

      /*
      Check if user role is string,
      */
      return authArr.includes(userRole);
    }
    // 인증 하지않음
    return true;
  }

  static setRoute(config, defaultAuth) {
    const auth = config.auth || defaultAuth;
    return { ...config, auth };
  }

  // 추가된 모든 라우터에 권한 설정
  static defaultAuthConfig(configs, defaultAuth) {
    let allRoutes = [];
    configs.forEach((config) => {
      allRoutes = [...allRoutes, this.setRoute(config, defaultAuth)];
    });
    return allRoutes;
  }
}

export default Utils;
