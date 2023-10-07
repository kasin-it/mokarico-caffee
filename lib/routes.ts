const shopItemsList = [
  { label: 'All Coffees', href: '/shop/all-coffees' },
  { label: 'Rainforest', href: '/shop/rainforest' },
  { label: 'Bio', href: '/shop/bio' },
  { label: 'Ground Coffee', href: '/shop/ground-coffee' },
  {
    label: 'Pods and Capsules',
    href: '/shop/pods-and-capsules',
    items: [
      { label: 'Capsule Fap', href: '#' },
      { label: 'Capsule Compatibili Nespresso', href: '#' },
      { label: 'Cialde in carta', href: '#' },
    ],
  },
  { label: 'Coffe Grains', href: '/shop/coffee-grains' },
  { label: 'Mono', href: '/shop/mono' },
  { label: 'La casa del caffe', href: '/shop/la-casa-del-caffe' },
  {
    label: 'Merchandising',
    href: '/shop/merchandising',
    items: [
      { label: 'Tazzine espresso', href: '#' },
      { label: 'Tazzine capuccino', href: '#' },
      { label: 'Mug', href: '#' },
      { label: 'Bicchieri vetro', href: '#' },
    ],
  },
];

const assistanceItemsList = [
  { label: 'Shipping', href: '/shipping' },
  { label: 'Return', href: '/return' },
  { label: 'Payments', href: '/payments' },
  { label: 'Contacts', href: '/contacts' },
];
const coffeItemsList = [
  { label: 'Blends', href: '/blends' },
  { label: 'Quality', href: '/quality' },
  { label: 'Organic', href: '/organic' },
];
const businessItemsList = [
  { label: 'Company', href: '/company' },
  { label: 'Choose Mokarico', href: '/choose-mokarico' },
  { label: 'Training Courses', href: '/training-courses' },
];

export {
  businessItemsList,
  assistanceItemsList,
  coffeItemsList,
  shopItemsList,
};
