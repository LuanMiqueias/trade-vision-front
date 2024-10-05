import { useQuery } from '@tanstack/react-query';
import Number from '../../../common/number'
import { Wallet } from '@/http/requests/wallet.request';

const BalanceBox = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['wallet'], queryFn: Wallet.fetchWallet
  });

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-baseline'>
        <Number value={+(data?.balance || 0)} loading={isLoading} className='text-6xl' decimals={2} />
        <span className='text-5xl text-[#A1A4B8] font-light'> USD</span>
      </div>
      <span className='text-lg text-[#535357] font-light'> BALANCE</span>
    </div>
  )
}

export default BalanceBox
