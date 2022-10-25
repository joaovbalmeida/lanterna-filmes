export default {
  title: 'Lanterneiros',
  name: 'people',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Foto',
      name: 'picture',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
}
