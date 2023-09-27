import { create } from 'zustand'

const useStore = create((set) => ({
    user: {
        name: '',
        age: 0,
        email: ''
    },
    updateUser: (updatedUser) => set((state) => ({ user: { updatedUser } }))
}))

export default useStore