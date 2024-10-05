import NegociationBox from "@/components/pages/trade/negociation-box"
import Container from "../../components/common/container"
import Header from "../../components/common/header"
import BalanceBox from "../../components/pages/trade/balance-box"
import PortfolioList from "../../components/pages/trade/portfolio"
import StockCardList from "../../components/pages/trade/stocks-list"

function Trade() {

  return (
    <>

      <Header />
      <Container className="mt-8 flex flex-col gap-x-2 gap-y-10 md:mt-0">
        <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center gap-y-3 lg:gap-0">
          <BalanceBox />
          <StockCardList />
        </div>
        <div className="flex justify-between flex-col-reverse items-start gap-y-10 md:gap-6 lg:flex-row">
          <PortfolioList />
          <NegociationBox />
        </div>
      </Container>
    </>
  )
}

export default Trade
