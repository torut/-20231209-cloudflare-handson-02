export const config = {
  runtime: 'edge',
}

export default async function getServerSideProps() {
  const random = Math.floor(Math.random() * 100);
  return new Response(random);
}

// export const config = {
//   runtime: 'edge',
// }

// export default async function (req) {
//   const kvvalue = await process.env.KV.get('test')

//   return new Response(kvvalue)
// }

