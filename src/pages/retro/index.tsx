import RetroList from '@/container/Retro/List';
import CreateRetro from '@/container/Retro/Create';

export default function Home() {
  return (
    <div>
      <CreateRetro />
      <RetroList />
    </div>
  );
}

// export async function getServerSideProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: NewsListQuery,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
