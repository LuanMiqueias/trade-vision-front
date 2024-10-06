import Number from '../../../../common/number'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StockCardProps {
  stokeName: string;
  stockCompany: string;
  value: number;
  variationPercent: number;
  variationDolar: number;
}
const StockCard: React.FC<StockCardProps> = ({
  stokeName,
  stockCompany,
  value,
  variationPercent,
}) => {
  return (
    <Card>
      <CardHeader className=' space-y-0 p-5 py-3 pb-0 select-none'>
        <CardTitle>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-secundary text-[#5855F9]'>{stokeName}</span>
            <span className='text-xs text-[#606BBA]'>
              {" • "}
            </span>
            <span className='text-xs text-[#606BBA] w-28 truncate' title={stockCompany}>
              {stockCompany}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className=' px-5 pt-0  pb-4 select-none'>
        <div className='flex gap-1'>
          <div>
            <Number prefix='$' value={value} decimals={2} className='font-semibold text-base' />
          </div>
          <div className='flex gap-2 items-center'>
            <Number prefix="+" value={variationPercent} suffix='%' decimals={2} className='font-regular text-xs text-[#65F09D]' />
            {/* <Number prefix="( $" value={variationDolar} suffix=")" decimals={2} className='font-light text-xs text-[#65F09D]' /> */}
          </div>
        </div>
      </CardContent>
    </Card>

  )
}

export default StockCard
