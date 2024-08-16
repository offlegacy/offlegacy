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
        <PackageCard>
          <PackageCard.Title>Query Fetch</PackageCard.Title>
          <PackageCard.Description>🔗 Lightweight and Easy-to-Use Fetch API Extension Library.</PackageCard.Description>
        </PackageCard>
        <PackageCard>
          <PackageCard.Title>Vitest React Native</PackageCard.Title>
          <PackageCard.Description>⚡️⚛️📱 vitest plugin for react-native</PackageCard.Description>
        </PackageCard>
      </section>
    </Page>
  )
}
