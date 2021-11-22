import { FC, ReactNode } from 'react';

type OrderButtonProps = {
  children?: ReactNode;
};

const OrderButton: FC<OrderButtonProps> = ({ children }) => {
  return (
    <button
      type='button'
      className='w-full text-white text-sm font-semibold px-8 py-2 transition bg-gradient-to-r from-red-900 via-red-700 to-yellow-700 hover:from-red-800 hover:via-red-600 hover:to-yellow-600'
    >
      {children}
    </button>
  );
};

export default OrderButton;
