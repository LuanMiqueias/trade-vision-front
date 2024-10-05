import { TableCell, TableRow } from "@/components/ui/table"
import Number from "../../../../common/number"
import { PortfolioItemType } from "@/http/types"
import SkeletonLoading from "@/components/common/skeleton-loading";

interface PortfolioItemProps {
  data?: PortfolioItemType;
  loading?: boolean
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  data,
  loading
}) => {
  return (
    <TableRow>
      <TableCell width='30%"' className="min-w-[120px]">
        {loading ? <SkeletonLoading width="120px" height="18px" /> : <div className="text-sm font-semibold">{data?.symbol}</div>}
      </TableCell>
      <TableCell width="15%">
        {loading ? <SkeletonLoading width="60px" height="18px" /> : <Number className="" prefix="$" value={+(data?.purchase_price || 0) * +(data?.quantity || 0)} decimals={2} />}
      </TableCell>
      <TableCell width="20%">
        {loading ? <SkeletonLoading width="85px" height="18px" /> : <Number className="" value={data?.quantity || 0} />}
      </TableCell>
      <TableCell >
        {loading ? <SkeletonLoading width="160px" height="18px" /> : <div className=' flex gap-2 items-center'>
          <Number prefix="+" value={Math.random() * 100} suffix='%' decimals={2} className='font-semibold text-xs text-[#65F09D]' />
          <Number prefix="( $" value={+(data?.purchase_price || 0)} suffix=")" decimals={2} className='font-semibold text-xs text-[#65F09D] whitespace-nowrap' />
        </div>}


      </TableCell>
    </TableRow >
  )
}

export default PortfolioItem
