import { numericFormatter } from "react-number-format";
import SkeletonLoading from "../skeleton-loading";
import { SkeletonProps } from "react-loading-skeleton";

interface NumberProps {
  value: number;
  className?: string;
  decimals?: number;
  prefix?: string
  suffix?: string;
  loading?: boolean;
  skeletonProps?: SkeletonProps
}
const Number: React.FC<NumberProps> = ({ value, className, decimals = 0, prefix,
  suffix, loading, skeletonProps }) => {
  return (
    <span className={'font-primary-semibold ' + className}>
      {
        loading ? <SkeletonLoading style={{ minWidth: '150px' }} {...skeletonProps} /> : numericFormatter(`${value}`, {
          decimalScale: decimals,
          fixedDecimalScale: true,
          thousandSeparator: ',',
          prefix,
          suffix,
        })
      }

    </span>
  )
}

export default Number
