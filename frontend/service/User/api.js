import api from "../service.js";
import AsyncStorageClass from "../../Storage/AsyncStorage.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

class Api {
  // Refresh Access Token
  async refresh() {
    try {
      const tokens = await AsyncStorageClass.getTokens();

      if (!tokens?.reafresh_token) {
        return null;
      }

      const res = await api.get("/refresh", {
        headers: {
          authorization: `Bearer ${tokens.reafresh_token}`,
        },
      });
      await AsyncStorageClass.remove()
      await AsyncStorageClass.setTokens(res.data);

      return res.data;
    } catch (error) {
      console.log("Refresh token error:", error?.response?.data || error.message);
      return null;
    }
  }

  // Login
  async login(data) {
    try {
      const res = await api.post("/login", data);

      await AsyncStorageClass.setTokens(res.data);

      return res.data;
    } catch (error) {
      // console.log("Login error:", error?.response?.data || error.message);
      throw error;
    }
  }

  // Register
  async register(data) {
    try {
      const res = await api.post("/register", data);
      return res.data;
    } catch (error) {
      // console.log("Register error:", error?.response?.data || error.message);
      throw error;
    }
  }

  // Get Current User
  async getMe() {
    try {
      let tokens = await AsyncStorageClass.getTokens();
      console.log(tokens)
      if (!tokens?.acess_token) {
        throw new Error("No access token");
      }
      console.log(tokens.acess_token)

      const res = await api.get("/me", {
        headers: {
          authorization: `Bearer ${tokens.acess_token}`,
        }
      });
      console.log(res)

      return res.data;
    } catch (error) {
      console.log("Access token expired, refreshing...");

      const newTokens = await this.refresh();
      console.log(newTokens)
      if (!newTokens) {
        throw error;
      }

      const res = await api.get("/me", {
        headers: {
          authorization: `Bearer ${newTokens.acess_token}`,
        },
      });

      return res.data;
    }
  };
  async getAll() {
    try{
      const data = await api.get("/test");
      return data.data
    }catch(error){
      console.log(error)
    }
  }

}

export default new Api();