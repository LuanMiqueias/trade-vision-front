
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonLoadingProps extends SkeletonProps {

}
const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ ...props }) => {
  return (
    <Skeleton baseColor='#646465' {...props} />
  )
}

export default SkeletonLoading
