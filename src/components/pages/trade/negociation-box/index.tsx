import Number from "@/components/common/number"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Stocks } from "@/http/requests/stocks.request"
import { StockItemType } from "@/http/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { AxiosError } from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import useMeasure from 'react-use-measure'
import { motion } from "framer-motion";

interface NegociationBoxProps {

}
type tradeInputType = {
  symbol: string;
  quantity: number
}
const NegociationBox: React.FC<NegociationBoxProps> = ({

}) => {
  const queryClient = useQueryClient()
  const [ref, { height }] = useMeasure()
  const { toast } = useToast()
  const [stockSelect, setStockSelect] = useState(null as StockItemType | null);
  const [quantity, setQuantity] = useState<number | null>(null);

  const { data: stocksList, isLoading } = useQuery({
    queryKey: ['stocks', 300], queryFn: () => Stocks.fetchStocks({
      page: 1,
      skip: 0,
      take: 300
    })
  });

  const { isPending: loadingBuy, ...buyStock } = useMutation({
    mutationFn: (data: tradeInputType) => Stocks.buyStock({
      quantity: data?.quantity,
      symbol: data?.symbol
    }),
    onSuccess() {
      resetForm()
      queryClient.invalidateQueries({ queryKey: ['wallet'], refetchType: 'all' })
      queryClient.invalidateQueries({ queryKey: ['portfolio'], refetchType: 'all' })

      toast({
        description: <span> Your purchase of <b>{stockSelect?.symbol}</b> has been successfully completed</span>,
      });
    },
    onError(error: AxiosError<{ message: string }>) {
      toast(
        {
          description: error?.response?.data?.message,
          variant: 'destructive',
        }
      )
    }
  });

  const { isPending: loadingSell, ...sellStock } = useMutation({
    mutationFn: (data: tradeInputType) => Stocks.sellStock({
      quantity: data?.quantity,
      symbol: data?.symbol
    }),
    onSuccess() {
      resetForm()
      queryClient.invalidateQueries({ queryKey: ['wallet'], refetchType: 'all' })
      queryClient.invalidateQueries({ queryKey: ['portfolio'], refetchType: 'all' })

      toast({
        description: <span>Your sale of <b>{stockSelect?.symbol}</b> has been successfully completed</span>,
      });
    },
    onError(error: AxiosError<{ message: string }>) {
      toast(
        {
          description: error?.response?.data?.message,
          variant: 'destructive',
        }
      )
    }
  });

  const resetForm = () => {
    setQuantity(null);
    setStockSelect(null)
  }

  return (

    <div className='flex flex-col w-full lg:h-[500px] lg:w-[500px]'>
      <CardHeader className='p-0 pb-4'>
        <CardTitle className='text-gray-100'>
          TRADE
        </CardTitle>
        <CardDescription className='text-gray-500'>
          Buy and sell shares in a simulated way.
        </CardDescription>
      </CardHeader>
      <Card className="pt-6 flex flex-col" >
        <motion.div
          animate={{
            height: height,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <CardContent className="overflow" ref={ref}>
            <div className="flex justify-between items-start gap-4">
              <Select disabled={isLoading}
                value={stockSelect?.symbol || ''} defaultValue=""
                onValueChange={(v) => {
                  const stock = stocksList?.find(item => item.symbol === v)
                  stock && setStockSelect(stock)
                }}
                autoComplete="stock"
              >

                <div className="flex flex-col w-full  gap-2">
                  <p className="text-xs text-gray-500">Select Stock:</p>
                  <SelectTrigger className="w-full ">
                    <div className="flex items-center gap-2">
                      <SelectValue placeholder="" className="text-gray-600" />
                    </div>
                  </SelectTrigger>
                </div>
                <SelectContent>
                  {stocksList?.map(item => <SelectItem value={item?.symbol}>{item.symbol}</SelectItem>)}
                </SelectContent>
              </Select >
              <div className="flex flex-col gap-2 text-xs justify-between">
                <label className="text-xs text-gray-500">Quantity:</label>
                <Input
                  className="w-[80px]"
                  placeholder="0" type="number"
                  value={quantity || ''}
                  onChange={(e) => {
                    setQuantity(+e?.target?.value)
                  }} />
              </div>
            </div>
            {
              !!stockSelect?.id && <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.2
                  }}
                >
                  <span className="block w-[calc(100% + 32px)] mx-[-24px] my-6 h-[1px] bg-zinc-800" />

                  <div className="w-full flex  justify-between">
                    <div className="w-full flex flex-col gap-1">
                      <p className="text-sm">{stockSelect?.symbol}</p>
                      <span className="text-xs block max-w-[150px] truncate font-light text-gray-300">{stockSelect.name}</span>
                    </div>
                    <div className='flex flex-col  items-end'>
                      <Number prefix="$" value={+stockSelect?.price} suffix="" decimals={2} className='font-semibold  whitespace-nowrap text-lg text-gray-300' />
                      <Number prefix="(+" value={Math.random() * 100} suffix='%)' decimals={2} className='font-regular whitespace-nowrap text-xs text-[#65F09D]' />
                    </div>
                  </div>
                </motion.div>
              </>
            }
            {/* <span className="block w-[calc(100% + 32px)] mx-[-24px] my-6 h-[1px] bg-zinc-800" /> */}


            {!!(quantity && !!stockSelect) && <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2
                }}
              >
                <span className="block w-[calc(100% + 32px)] mx-[-24px] my-6 h-[1px] bg-zinc-800" />
                <div className="flex gap-2 flex-col">
                  <CardHeader className="p-0">
                    <CardTitle className="font-regular text-sm text-gray-300">
                      Resume:
                    </CardTitle>
                  </CardHeader>
                  <Card className="">
                    <CardContent className=" px-5 py-4 space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">Stock:
                        <span className="text-gray-300 text-sm" title={stockSelect?.name}>{stockSelect?.symbol}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">Quantity:
                        <Number value={quantity} className="text-gray-300 text-sm" />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">Price:
                        <Number prefix="$" value={+stockSelect?.price} decimals={2} className="text-gray-300 text-sm" />
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">Total:
                        <Number prefix="$" value={quantity * (+stockSelect?.price)} decimals={2} className="text-gray-300 text-sm" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </>}
          </CardContent >
        </motion.div >

        <CardFooter>
          <div className="flex w-full gap-3">
            <Button className="font-semibold w-full text-gray-100" loading={loadingBuy} disabled={!quantity || !stockSelect || loadingBuy || loadingSell} onClick={async () => {
              if (!quantity || !stockSelect) return
              buyStock.mutate({
                quantity,
                symbol: stockSelect?.symbol
              });
            }}>
              BUY
            </Button>
            <Button className="font-bold w-full text-gray-100" variant='secondary'
              disabled={!quantity || !stockSelect || loadingBuy || loadingSell}
              loading={loadingSell}
              onClick={async () => {
                if (!quantity || !stockSelect) return
                sellStock.mutate({
                  quantity,
                  symbol: stockSelect?.symbol
                });
              }}
            >
              SELL
            </Button>
          </div>
        </CardFooter>
      </Card >

    </div >

  )
}

export default NegociationBox
