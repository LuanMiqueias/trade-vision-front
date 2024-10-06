import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Number from '../../../common/number'
import { Wallet } from '@/http/requests/wallet.request';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PopoverContent } from '@/components/ui/popover';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const BalanceBox = () => {
  const queryClient = useQueryClient()
  const [amount, setAmount] = useState<number | null>();
  const [openModalDeposit, setOpenModalDeposit] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['wallet'], queryFn: Wallet.fetchWallet
  });

  const { isPending: depositLoading, ...depositWallet } = useMutation({
    mutationKey: ['wallet'], mutationFn: (data: { amount: number }) => Wallet.depositInWallet({
      amount: data?.amount
    }),
    onSuccess(data, variables) {
      queryClient.setQueryData(['wallet'], {
        ...data
      });
      queryClient.invalidateQueries({ queryKey: ['wallet'], refetchType: 'all' })

      toast({
        description: <span>Deposit of ${variables?.amount} made successfully</span>,
      });

      setOpenModalDeposit(false);
      setAmount(null)
    },
  });

  return (
    <div className='mt-4 flex gap-4 flex-col lg:flex-row-reverse lg:items-center'>
      <Popover
        open={openModalDeposit}
        onOpenChange={setOpenModalDeposit}
      >
        <div className='flex items-center gap-2 lg:mt-[-24px]'>
          <PopoverTrigger>
            <Button variant='outline' className='text-gray-300 text-xs font-semibold flex gap-2'
            >
              DEPOSIT
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <span className='text-gray-500 text-xs'>Simulate</span>
        </div>
        <PopoverContent
          sideOffset={8}
          align='start'
        >
          <div className="grid gap-4">
            <div className="grid gap-6">
              <div className="flex items-center gap-2">
                <Label htmlFor="amount" className='text-gray-300 text-xs'>Amount:</Label>
                <NumericFormat
                  customInput={Input}
                  id="amount"
                  className="h-8 max-w-32"
                  min={1}
                  step={1}
                  max={99999}
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  value={amount}
                  onValueChange={(e) => {
                    const value = e?.floatValue || 0;
                    if (+value >= 99999) return setAmount(0)
                    setAmount(+value)
                  }}
                >

                </NumericFormat>
              </div>
              <Button size='sm' className='text-gray-300 text-xs font-semibold flex gap-1' loading={depositLoading}
                onClick={() => {
                  if (!amount) return

                  depositWallet.mutate({
                    amount
                  })
                }}
              >
                Make deposit
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-baseline'>
          <Number value={+(data?.balance || 0)} loading={isLoading} className='text-6xl' decimals={2} />
          <span className='text-5xl text-[#A1A4B8] font-light'> USD</span>
        </div>
        <span className='text-lg text-[#535357] font-light'> BALANCE</span>
      </div>
    </div>
  )
}

export default BalanceBox
