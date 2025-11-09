module.exports = {
  expo: {
    name: 'Special Olympics Morocco',
    slug: 'som-app',
    version: '1.0.0',
    orientation: 'landscape',
    icon: './assets/images/icon.png',
    scheme: 'som',
    userInterfaceStyle: 'dark',
    newArchEnabled: true,
    splash: {
      image: './assets/images/icon.png',
      resizeMode: 'contain',
      backgroundColor: '#2a2420'
    },
    android: {
      screenOrientation: 'landscape',
      supportsTablet: true,
      package: 'com.specialolympics.morocco',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/images/icon.png',
        backgroundColor: '#2a2420'
      },
      permissions: []
    },
    ios: {
      supportsTablet: true,
      requiresFullScreen: true,
      bundleIdentifier: 'com.specialolympics.morocco'
    },
    web: {
      bundler: 'metro',
      output: 'single',
      favicon: './assets/images/favicon.png'
    },
    assetBundlePatterns: [
      'assets/**/*'
    ],
    plugins: [
      'expo-router',
      'expo-font',
      'expo-web-browser'
    ],
    experiments: {
      typedRoutes: true
    },
    updates: {
      enabled: false
    },
    extra: {
      eas: {
        projectId: 'b495f1c2-5567-44af-807b-ab772a77708e'
      }
    }
  }
};
