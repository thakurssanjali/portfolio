import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
