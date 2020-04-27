export interface ButtonProps {
    showFunction?: React.Dispatch<React.SetStateAction<boolean>>;
    onClick: () => any;
    isDisabled?: boolean;
    label: string;
}