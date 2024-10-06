import Logo from '@/assets/images/logo.png'
import Header from "@/components/common/header";
import { useState } from "react";
import LoginForm from "@/components/pages/home/login";
import RegisterForm from "@/components/pages/home/register";

function Home() {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col bg-gradient-to-r from-[#171D55] to-[#252D6D]">
        <Header />
        <div className="flex-1 flex flex-col gap-8 items-center justify-center">


          <img src={Logo} />

          {/* <button className="border px-12 py-4 rounded-lg border-2 border-[#5855F9] text-[#5855F9] font-semibold uppercase">go to Simulate trading</button> */}
          <button className="px-12 py-3 rounded-lg border-2 border-[#fff] text-[#fff] font-semibold uppercase transition-all hover:px-20 hover:bg-[rgba(255,255,255,0.07)]" onClick={() => setOpenLoginModal(true)}>go to Simulate trading</button>
        </div>
      </div>
      <LoginForm
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
        setOpenRegisterModal={setOpenRegisterModal}
      />
      <RegisterForm
        openModal={openRegisterModal}
        setOpenModal={setOpenRegisterModal}
        setOpenLoginModal={setOpenLoginModal}
      />
    </>
  )
}

export default Home
