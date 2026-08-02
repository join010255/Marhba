import { create } from "zustand";

const useUserData = create((set) => ({
    userData  : null,

    setUserData : (data) => set({ userData : data })
}))

export default useUserData;