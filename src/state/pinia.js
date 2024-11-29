import { useLayoutStore } from "./pinia/layout";
import { useAuthStore } from "./pinia/auth";
import { useNotificationStore } from "./pinia/notification";
import { createPinia } from "pinia";

const pinia = createPinia();
export default pinia;

export { useLayoutStore, useAuthStore, useNotificationStore};
