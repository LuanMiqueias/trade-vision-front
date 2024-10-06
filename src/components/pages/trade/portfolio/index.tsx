import { useQuery } from '@tanstack/react-query'
import PortfolioItem from './item'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Portfolio } from '@/http/requests/portfolio.request'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'


const PortfolioList: React.FC = ({

}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['portfolio'], queryFn: Portfolio.fetchPortfolio
  });
  return (

    <div className='flex flex-col w-full'>
      <CardHeader className='p-0 pb-4'>
        <CardTitle className='text-gray-100'>
          PORTFOLIO
        </CardTitle>
        <CardDescription className='text-gray-500'>
          View and track the performance of your assets.
        </CardDescription>
      </CardHeader>
      <Card className='w-full pt-4 px-1'>
        <CardContent className='w-full overflow-auto max-h-[500px]'>
          <Table>
            {!!(data?.length && !isLoading) && <TableHeader >
              <TableRow>
                <TableHead className="w-[200px] text-gray-600">Stock Name</TableHead>
                <TableHead className='text-gray-600'>Value</TableHead>
                <TableHead className='text-gray-600'>Amount</TableHead>
                <TableHead className='text-gray-600'>Variation</TableHead>
              </TableRow>
            </TableHeader>}

            <TableBody>
              {isLoading ? [0, 1, 2, 3]?.map((_, index) => <PortfolioItem loading={isLoading} key={index} />)
                : data?.map(item => <PortfolioItem key={item.id} data={item} />)}
            </TableBody>
          </Table>
          {!!(!data?.length && !isLoading) && <div className='flex justify-center flex-col gap-2 items-center h-80'>
            <ExclamationTriangleIcon width="24px" height="24px" color='#6b7280' />
            <p className='text-gray-300'>Your portfolio is still empty, simulate some trades!</p>
          </div>}
        </CardContent>
      </Card>
    </div>
  )
}

export default PortfolioList
