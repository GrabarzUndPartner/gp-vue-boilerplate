const version = 10001;

class ModuleClass {

  locateFile(baseName) {
    return `build/${baseName}`;
  }

  instantiateWasm(imports, callback) {
    instantiateCachedURL(version, this.locateFile('cv-wasm.wasm'), imports)
      .then(instance => callback(instance));
    return { };
  }

  onInit(cb) {
    this._initCb = cb;
  }

  onRuntimeInitialized() {
    if (this._initCb) {
      return this._initCb(this);
    }
  }
}

self.Module = new ModuleClass();
