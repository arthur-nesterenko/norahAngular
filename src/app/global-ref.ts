export interface MyGlobal {
  handleClick: any;
  saveAnim: any;
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
  LoadFinished: any;
  ApplyLeftAnim: any;
  ApplyRightAnim: any;
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): MyGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal {
    return <any>window as MyGlobal;
  }
}
