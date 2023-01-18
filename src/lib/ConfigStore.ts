class ConfigStore {
  pageId = -1;

  locked = false;
}

const singleton = new ConfigStore();
export default singleton;