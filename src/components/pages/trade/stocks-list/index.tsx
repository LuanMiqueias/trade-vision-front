import { useQuery } from "@tanstack/react-query";
import StockCard from "./stock"
import { Stocks } from "@/http/requests/stocks.request";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import SkeletonLoading from "@/components/common/skeleton-loading";


const StockCardList: React.FC = ({
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['stocks', 300], queryFn: () => Stocks.fetchStocks({
      page: 1,
      skip: 0,
      take: 300
    })
  });
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full max-w-[100vw - 64px] lg:pl-6 lg:mt-[-28px] lg:max-w-[600px] xl:max-w-[800px]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {isLoading ?
          [0, 1, 2].map((_, index) => <>
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/3 xl:basis-1/4">
              <SkeletonLoading height="106px" />
            </CarouselItem>
          </>) : data?.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <StockCard
                  key={item?.id}
                  stockCompany={item?.name}
                  stokeName={item?.symbol}
                  value={+item?.price}
                  variationDolar={(Math.random() * 100) * (index + 1)}
                  variationPercent={Math.random() * 100}

                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>

    </Carousel>
  )
}

export default StockCardList
