/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

// Assets
import { favicon, logo} from '@/assets';

type LogoProps = {
    variant?: 'default' | 'icon';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a href="" className="">
        {variant === 'default' && (
            <img src={logo} alt="Terra Logo" width={150} height={31} />
        )}

        {variant === 'icon' && (
            <img src={favicon} alt="Terra Logo"   width={64} height={64} />
          
        )}
    </a>
  );
}

export default Logo;
