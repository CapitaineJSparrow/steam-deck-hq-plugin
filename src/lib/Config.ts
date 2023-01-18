class Config {
  pageId = -1;

  locked = false;

  setPageId(id: number) {
    this.pageId = id;
  }

  getPageId() {
    return this.pageId;
  }
}

const singleton = new Config();
export default singleton;