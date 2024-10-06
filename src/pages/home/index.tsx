import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Logo from '@/assets/images/logo.png'
import Header from "@/components/common/header";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

function Home() {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const form = useForm()

  const onSubmit = () => { }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col bg-gradient-to-r from-[#171D55] to-[#252D6D]">
      <Header />
      <div className="flex-1 flex flex-col gap-8 items-center justify-center">


        <img src={Logo} />

        {/* <button className="border px-12 py-4 rounded-lg border-2 border-[#5855F9] text-[#5855F9] font-semibold uppercase">go to Simulate trading</button> */}
        <button className="px-12 py-3 rounded-lg border-2 border-[#fff] text-[#fff] font-semibold uppercase transition-all hover:px-20 hover:bg-[rgba(255,255,255,0.07)]" onClick={() => setOpenLoginModal(true)}>go to Simulate trading</button>
      </div>
      <Dialog open={openLoginModal}
        onOpenChange={(v) => {
          setOpenLoginModal(v)
        }}
      >
        <DialogContent>
          <DialogContent className="gap-8">
            <DialogHeader >
              <DialogTitle className="text-gray-300">
                Login
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-semibold text-gray-300">
                  <a href="/trade" className="w-full font-semibold text-gray-300">
                    Login
                  </a>
                </Button>
                <Button type="submit" variant='outline' className="w-full font-semibold text-gray-300">Create Accont</Button>
              </form>
            </Form>
          </DialogContent>
        </DialogContent>


      </Dialog>
    </div>
  )
}

export default Home
