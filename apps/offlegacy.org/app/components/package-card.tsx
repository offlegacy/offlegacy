import { type PropsWithChildren } from 'react'

const PackageCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="border border-gray-700 hover:border-gray-500 p-4 flex flex-col rounded-lg transition-colors">
      {children}
    </div>
  )
}

const PackageCardTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="font-semibold text-xl mb-2">{children}</h3>
}

const PackageCardDescription = ({ children }: PropsWithChildren) => {
  return <p className="text-gray-400">{children}</p>
}

PackageCardTitle.displayName = 'PackageCardTitle'
PackageCardDescription.displayName = 'PackageCardDescription'

PackageCard.Title = PackageCardTitle
PackageCard.Description = PackageCardDescription

export default PackageCard
