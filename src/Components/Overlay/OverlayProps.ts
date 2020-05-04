export interface OverlayProps {
    Component: any;
    currentState: boolean;
    hide: React.Dispatch<React.SetStateAction<boolean>>;
    hideExitButton?: boolean
  }