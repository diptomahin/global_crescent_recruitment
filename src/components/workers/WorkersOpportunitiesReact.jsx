import IndustryCardGrid from '../common/IndustryCardGrid'
import { industryItems } from '../../data/industryItems'

export default function WorkersOpportunitiesReact() {
  return (
    <div id="worker-opportunities">
      <IndustryCardGrid
        items={industryItems}
        title="Opportunity areas"
        description="We work across a wide range of sectors, helping candidates explore roles that align with their skills and goals."
        sectionClassName="bg-white py-20"
        cardClassName="group relative overflow-hidden rounded-[26px] border border-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1.5 hover:border-[#D60000]/18 hover:shadow-[0_22px_45px_rgba(214,0,0,0.08)]"
      />
    </div>
  )
}
