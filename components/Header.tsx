import {
  ClerkLoaded,
  ClerkLoading,
  currentUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export const Header = async () => {
  const user = await currentUser()
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
            <h1 className="text-xl font-extrabold tracking-wide text-green-600">
              Bid Buddy
            </h1>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link
              href="/create-item"
              className="flex items-center gap-x-3 pb-7 pl-4 pt-8"
            >
              <h2 className="text-xl font-extrabold tracking-wide text-blue-600 hover:text-blue-800">
                Auction an Item
              </h2>
            </Link>
          </Button>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <span className="text-blue-700">{user?.firstName}</span>

            <p>: Current user</p>
          </div>
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/bids"
                afterSignUpUrl="/bids"
              >
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  )
}
