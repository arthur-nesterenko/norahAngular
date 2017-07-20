export interface MyGlobal {
  THREE: {
    OBJLoader2: {
      WWOBJLoader2: any;
    },
    TrackballControls: any;
  };
  dat: any;
  UnityLoader: any;
  UnityProgress: any;
  yamllibrary: any;
  mp4library: any;
  UnityLoadFinished: any;
  downloadAnim: any;
  toastr: any;
  download: any;
  deleteSelected: any;
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): MyGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal {
    return <any>window as MyGlobal;
  }
}
