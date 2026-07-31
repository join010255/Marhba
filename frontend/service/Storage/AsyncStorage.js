import AsyncStorage from "@react-native-async-storage/async-storage";


class AsyncStorageClass{
    async setTokens(tokens) {
        try{
            const data = await AsyncStorage.getItem("tokens");
            if(data !== null){
                await AsyncStorage.clear()
            }
            await AsyncStorage.setItem("tokens", JSON.stringify(tokens))    
        }catch(error){
            console.log(error)
        }
    }

    async getTokens() {
        try{
            const tokens = await AsyncStorage.getItem("tokens");
            if(tokens !== null){
                return JSON.parse(tokens)
            }
        }catch(error){
            console.log(error)
        }
    }
}

export default new AsyncStorageClass();