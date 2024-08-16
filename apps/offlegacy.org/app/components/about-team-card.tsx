import Image from 'next/image'

const AboutTeamCard = () => {
  return (
    <section className="mx-auto flex flex-col items-center space-y-1.5">
      <Image src="/offlegacy.svg" alt="offlegacy logo" width={256} height={256} priority />
      <h1 className="text-3xl font-bold">OffLegacy</h1>
      <h2 className="text-xl font-semibold">Open-source Development Team in South Korea 🇰🇷</h2>
    </section>
  )
}

export default AboutTeamCard
