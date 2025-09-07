'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react"
import passwordAuthAnimation from "@/assets/lotties/PasswordAuthentication.json"
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(ROUTE.DASHBOARD);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-center">
          <Lottie animationData={passwordAuthAnimation} loop={true} className="w-full h-full max-w-[8rem]" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="adminemail@gmail.com"
          />
        </div>
        <div className="grid gap-1">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a className="ml-auto text-sm underline-offset-2 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="#### ####"
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </div>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t my-3">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>
      <Button variant="outline" type="submit" className="w-full gap-1">
        <FcGoogle />
        <span className="-mt-0.5">Login with Google</span>
      </Button>
    </form>
  )
}