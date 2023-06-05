import { usePathname } from 'next/navigation';

const useCurrTabName = () => {
  const pathname = usePathname();

  const currTabName = pathname.split('/')[1];

  return currTabName;
};

export default useCurrTabName;
