import { defineStore } from "pinia";

// handle config apps
const defaultConfigApps = null;
const getConfigApps = () => {
  const configApps = localStorage.getItem('configApps');
  return configApps ? JSON.parse(configApps) : defaultConfigApps;
};

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    layoutType: "horizontal",
    leftSidebarType: "dark",
    layoutWidth: "scrollable",
    topbar: "dark",
    loader: false,
    mode: "light",
    configApps: getConfigApps()
  }),
  actions: {
    changeLayoutType(layoutType) {
      this.layoutType = layoutType;
    },
    changeLayoutWidth(layoutWidth) {
      this.layoutWidth = layoutWidth;
    },
    changeLeftSidebarType(leftSidebarType) {
      this.leftSidebarType = leftSidebarType;
    },
    changeTopbar(topbar) {
      this.topbar = topbar;
    },
    changeLoaderValue(loader) {
      this.loader = loader;
    },
    changeMode(mode) {
      this.mode = mode
    },
    changeConfigApps(configuration){
      this.configApps = configuration;
      localStorage.setItem('configApps', JSON.stringify(configuration));
    }
  }
});