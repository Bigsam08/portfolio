/**
 * create a custom notification with zustand
 */
import { create } from "zustand"

const notificationStore = create((set) => ({
    notify: null,

    // success message notification
    success: (message) => {
        set({ notify: { message, type: "success" } });
        setTimeout(() => set({ notify: null }), 3000);
    },

    // error notification toast
    error: (message) => {
        set({ notify: { message, type: "error" } })
        setTimeout(() => set({ notify: null }), 3000);
    },

}))

export default notificationStore;