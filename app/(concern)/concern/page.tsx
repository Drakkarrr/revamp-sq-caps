"use client"

import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Concern",
  description: "Concern page for MOELCI-II Bonifacio Branch",
}

export default function ConcernPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/purpose"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Concern
          </h1>
          <p className="text-sm text-muted-foreground">
            For your concern, please print your queue number.
          </p>
        </div>
        <form>
          <div className="grid gap-8">
            {/* <Link href="#" className={cn(buttonVariants())}>
              <button onClick={handlePrint}>Print Queue Number</button>
            </Link> */}
            <button className={cn(buttonVariants())} onClick={handlePrint}>
              Print Queue Number
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
