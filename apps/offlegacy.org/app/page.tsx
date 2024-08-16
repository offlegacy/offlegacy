import Image from 'next/image'
import PackageCard from './components/package-card'
import Page from './components/page'
import AboutTeamCard from './components/about-team-card'

export default function Home() {
  return (
    <Page>
      <AboutTeamCard />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PackageCard>
          <PackageCard.Title>Palette Kit</PackageCard.Title>
          <PackageCard.Description>
            🎨 Manage Design Tokens more easily and conveniently in a CSS-in-JS environment.
          </PackageCard.Description>
        </PackageCard>
      </section>
    </Page>
  )
}
