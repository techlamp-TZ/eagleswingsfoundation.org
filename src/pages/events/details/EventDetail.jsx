import { createVariantDetailPage } from '../../../utils/createVariantPage.jsx'
import { eventDetailRegistry } from './index.js'
import { eventDetails } from '../../../data/eventDetails.js'

export default createVariantDetailPage('event-detail', eventDetailRegistry, {
  paramName: 'eventId',
  basePrefix: '/events',
  lookup: (id) => eventDetails[id],
})
