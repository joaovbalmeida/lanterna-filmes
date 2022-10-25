import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'je65ydyl',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
})

export default client
