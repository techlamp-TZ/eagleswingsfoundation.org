import { createVariantDetailPage } from '../../../utils/createVariantPage.jsx'
import { programDetailRegistry } from './index.js'
import { programDetails } from '../../../data/programDetails.js'

export default createVariantDetailPage('program-detail', programDetailRegistry, {
  paramName: 'programId',
  basePrefix: '/programs',
  lookup: (id) => programDetails[id],
})
