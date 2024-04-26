import { generateUniqueRef } from "../util";

export default {
  accounts: [
    {
      name: 'Babrus',
      code: 'SQ-1234',
      type: 'savings',
      secret: generateUniqueRef(),
    },
    {
      name: 'Mercerdes',
      code: 'MQ-1234',
      type: 'savings',
      secret: generateUniqueRef(),
    },
    {
      name: 'Porsche',
      code: 'PO-1234',
      type: 'current',
      secret: generateUniqueRef(),
    },
    {
      name: 'Volkswagen',
      code: 'VK-1234',
      type: 'current',
      secret: generateUniqueRef(),
    },
  ],
}