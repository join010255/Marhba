import  api  from "../service.js";
import AsyncStorageClass from "../Storage/AsyncStorage.js";


class Api {

    async refresh() {
        try{
            const getToken = await AsyncStorageClass.getTokens();
            if(getToken){
                const res = await api.get("/refresh", {
                    headers : `Bearer ${getToken.reafresh_token}`
                })
                if(res){
                    await AsyncStorageClass.setTokens(res)
                    return true
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    // CREATE
    async login(data) {
        try {
        const res = await api.post("/login", data);
        return res.data;
        } catch (error) {
        console.log("Error creating dish:", error?.response?.data || error.message);
        throw error;
        }
    }

    // Register
    async register(data) {
        try {
        const res = await api.post("/register", data);
        return res.data;
        } catch (error) {
        console.log("Error creating dish:", error?.response?.data || error.message);
        throw error;
        }
    }

}

export default new Api();