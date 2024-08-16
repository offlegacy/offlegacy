import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PageLayout = ({ children }: Props) => {
  return <main className="flex flex-col max-w-screen-xl p-4 m-auto space-y-10">{children}</main>
}

export default PageLayout
