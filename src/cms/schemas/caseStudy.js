export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string' },
    { name: 'problem', title: 'Problem', type: 'text' },
    { name: 'solution', title: 'Solution', type: 'text' },
    { name: 'result', title: 'Result', type: 'text' },
    { name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
  ],
};
