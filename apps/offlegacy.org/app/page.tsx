import Image from 'next/image'
import PackageCard from './components/package-card'

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-xl p-4 m-auto space-y-10">
      <section className="mx-auto flex flex-col items-center space-y-1.5">
        <Image src="/offlegacy.svg" alt="offlegacy logo" width={256} height={256} priority />
        <h1 className="text-3xl font-bold">OffLegacy</h1>
        <h2 className="text-xl font-semibold">Open-source Development Team in South Korea 🇰🇷</h2>
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PackageCard>
          <PackageCard.Title>Palette Kit</PackageCard.Title>
          <PackageCard.Description>
            🎨 Manage Design Tokens more easily and conveniently in a CSS-in-JS environment.
          </PackageCard.Description>
        </PackageCard>
      </section>
    </main>
  )
}
