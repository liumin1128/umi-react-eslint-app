import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@/components/Retro/Card';

interface User {
  avatar: string;
  nickname: string;
}

interface IItemProps {
  content: string;
  user: User;
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const { content, user } = props;
  return (
    <Card>
      <Avatar src={user?.avatar} sx={{ width: 24, height: 24, fontSize: 12 }}>
        {user?.nickname[0]}
      </Avatar>

      {content}
    </Card>
  );
};

export default Item;
