import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { User } from "@/http/requests/user.request";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from 'axios';

interface RegisterFormProps {
  openModal: boolean
  setOpenModal: (v: boolean) => void
  setOpenLoginModal: (v: boolean) => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  openModal,
  setOpenModal,
  setOpenLoginModal
}) => {
  const form = useForm<{
    email: string;
    password: string;
    name: string;
  }>()

  const { isPending: loadingRegister, ...registerUser } = useMutation({
    mutationFn: (data: {
      name: string,
      email: string,
      password: string
    }) => User.register({
      name: data?.name,
      email: data?.email,
      password: data?.password
    }),

    onSuccess() {
      toast({
        description: 'Account created successfully!',
      });
      setOpenModal(false);
      setOpenLoginModal(true)
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

  const onSubmit = (data: {
    name: string;
    email: string;
    password: string
  }) => {
    registerUser.mutate({
      ...data
    })
  }

  return (
    <Dialog open={openModal}
      onOpenChange={(v) => {
        setOpenModal(v)
      }}
    >
      <DialogContent className="gap-8 max-w-[calc(100%-32px)] sm:max-w-[440px]">
        <DialogHeader >
          <DialogTitle className="text-gray-300">
            Register
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: {
                  value: true,
                  message: 'Name is required'
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" type="text"  {...field} />
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required'
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" type="email"  {...field} />
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" required {...field} />
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full font-semibold text-gray-300" loading={loadingRegister}>
                Register
              </Button>
              <span className="block w-full text-center text-sm text-gray-400">or</span>
              <Button type="submit" variant='outline' className="w-full font-semibold text-gray-300"
                onClick={() => {
                  setOpenModal(false)
                  setOpenLoginModal(true)
                }}
              >Sign In</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default RegisterForm
