export default {
  title: 'Website',
  name: 'website',
  type: 'document',
  fieldsets: [
    { name: 'contact', title: 'Contato' },
    { name: 'social', title: 'Redes Sociais' },
  ],
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL do Instagram',
      name: 'instagram',
      type: 'url',
      fieldset: 'social',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL do Whatsapp',
      name: 'whatsapp',
      type: 'url',
      fieldset: 'social',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Celular',
      name: 'phone',
      type: 'string',
      fieldset: 'contact',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      fieldset: 'contact',
      validation: (Rule) => Rule.required(),
    },
  ],
}
