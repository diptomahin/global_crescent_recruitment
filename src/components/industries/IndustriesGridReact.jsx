import IndustryCardGrid from '../common/IndustryCardGrid'
import { industryItems } from '../../data/industryItems'

export default function IndustriesGridReact() {
  return (
    <IndustryCardGrid
      items={industryItems}
      title="Sector expertise across multiple hiring environments"
      description="Our experience across industries helps us build more relevant shortlists and better placement outcomes."
      cardClassName="group relative overflow-hidden rounded-[28px] border border-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_50px_rgba(214,0,0,0.08)]"
    />
  )
}
