// Style imports
import './styles.scss';

// Button interface declaration
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


export const Button = ({
  primary = false,
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {

  const mode = primary ? 'primary' : 'secondary';

  return (
    <button
      type="button"
      className={['button-styled', size, mode].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
