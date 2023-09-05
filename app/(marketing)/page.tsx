import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

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
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            WELCOME TO MOELCI-II
          </h1>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Bonifacio Branch
          </h2>
          <div className="space-x-4">
            <Link
              href="/purpose"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Proceed
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
