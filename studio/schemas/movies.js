export default {
  title: 'Filmes',
  name: 'movies',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Prévia',
      name: 'preview',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Diretor',
      name: 'director',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'iFrame do Youtube',
      name: 'youtube',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Foto',
      name: 'picture',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sinopse',
      name: 'summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Descrição Técnica',
      name: 'technicalDescription',
      type: 'text',
    },
    {
      title: 'Prêmios',
      name: 'awards',
      type: 'array',
      of: [
        {
          title: 'Prêmios',
          name: 'awards',
          type: 'object',
          fields: [
            {
              title: 'Nome',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Logo',
              name: 'logo',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
