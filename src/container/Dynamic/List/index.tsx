import Stack from '@mui/material/Stack';
import {
    useFindDynamicsQuery,
} from '@/generated/graphql';
import Error from '@/components/Error/common';

export default function DynamicListContainer() {
    const { data, loading, error } = useFindDynamicsQuery();
    console.log('data')
    console.log(data)
    return (
        <div>111</div>
    );
}
