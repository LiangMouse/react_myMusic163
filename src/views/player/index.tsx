import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Player: FC<IProps> = (props) => {
  return <div>Player</div>;
};

export default memo(Player);
