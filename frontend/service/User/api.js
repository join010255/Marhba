import api from "../service.js";
import AsyncStorageClass from "../../Storage/AsyncStorage.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

class Api {
  // Refresh Access Token
  async refresh() {
    try {
      const tokens = await AsyncStorageClass.getTokens();

      if (!tokens?.refresh_token) {
        return null;
      }

      const res = await api.get("/refresh", {
        headers: {
          Authorization: `Bearer ${tokens.refresh_token}`,
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
      console.log("Login error:", error?.response?.data || error.message);
      throw error;
    }
  }

  // Register
  async register(data) {
    try {
      const res = await api.post("/register", data);
      return res.data;
    } catch (error) {
      console.log("Register error:", error?.response?.data || error.message);
      throw error;
    }
  }

  // Get Current User
  async getMe() {
    try {
      let tokens = await AsyncStorageClass.getTokens();

      if (!tokens?.access_token) {
        throw new Error("No access token");
      }

      const res = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });

      return res.data;
    } catch (error) {
      console.log("Access token expired, refreshing...");

      const newTokens = await this.refresh();

      if (!newTokens) {
        throw error;
      }

      const res = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${newTokens.access_token}`,
        },
      });

      return res.data;
    }
  };

}

export default new Api();