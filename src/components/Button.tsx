interface ButtonProps {
    label?: string;
    type?: 'primary' | 'secondary' | 'third' | 'text' |'white' |'yellow';
    icon?: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

function Button({ label, type='secondary', icon,className, disabled, onClick }: ButtonProps) {
    // تعيين ألوان مختلفة لكل نوع
    const buttonClasses = {
        primary: `bg-primary-bg text-primary-text `,
        third: `bg-third-bg text-third-text`,
        text: `bg-none text-text-color border-2`,
        secondary: `bg-secondary-bg text-primary-text  border-2`,
        white: `bg-primary-bg text-primary-text border-2`,
        yellow: `bg-yellow-bg text-primary-text`,
      };

    return (
        <button
            className={`  rounded-full h-[48px] px-4 flex justify-center items-center gap-1 border-secondary-bg
                ${buttonClasses[type]} 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled} >
            {label && (<span className="">{label}</span>)}
            {icon && ( <i className={icon}></i> )}
        </button>
    );
}

export default Button;
