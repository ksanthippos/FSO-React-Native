import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    )

    return token ? JSON.parse(token) : null
  }

  async setAccessToken(accessToken) {
    const currentToken = await this.getAccessToken()
    const newToken = [ ...currentToken, accessToken ]

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(newToken),
    )
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export default AuthStorage;