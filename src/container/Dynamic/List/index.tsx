import { useFindDynamicsQuery } from '@/generated/graphql';

export default function DynamicListContainer() {
  const { data } = useFindDynamicsQuery();
  console.log('data');
  console.log(data);
  return <div>111</div>;
}
