export interface BoxProps {
    sharedObject: {};
  }
  
  // export interface TrackingNumberProps {
  //   buildTrackingNum: {
  //     boxOne: string;
  //     boxTwo: string;
  //     boxThree: string;
  //   };
  //   trackingNumber: string;
  // }

  export interface TrackingNumberProps {
    TrackCode: string;
  }
  
export interface UserInputProps {
  Email: string;
  TrackCode: string;
  Captcha?: string;
  }