import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export default function TicketingPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-2 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="/images/hero.png"
            alt="MOELCI-II Logo"
            width={155}
            height={180}
            className="rounded-md border bg-muted transition-colors"
          />
          <div className="mx-auto flex max-w-[58rem] flex-col space-y-4  text-left">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Generated ticket
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-3">
              Account Number: 1234567890
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-3">
              Your number is: 80
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-3">
              You are expected to be serve at 5:42pm
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-3">
              To be serve tomorrow at 8:00am
            </p>
          </div>
          <div className="mt-4 space-x-7 bg-black">
            <Button className={cn(buttonVariants({ size: "lg" }))}>
              Print Queue Number
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
