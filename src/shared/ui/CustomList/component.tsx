import { List, ListItem } from '@mui/material';
import { memo, type ReactNode } from 'react';

export type TRenderItem = { key: string; node: ReactNode };

export interface ICustomListProps {
  renderItems: TRenderItem[];
}

interface ICustomListItemProps {
  children: ReactNode;
}

const CustomList = ({ renderItems }: ICustomListProps) => {
  return (
    <List className="flex flex-col gap-4 rounded-xl!">
      {renderItems.map((renderItem) => (
        <MemoCustomListItem key={renderItem.key}>{renderItem.node}</MemoCustomListItem>
      ))}
    </List>
  );
};

const CustomListItem = ({ children }: ICustomListItemProps) => {
  return (
    <ListItem className="flex flex-col justify-between gap-6 rounded-xl! bg-emerald-50! p-2! shadow-2xs! transition-all! hover:bg-slate-50! hover:shadow-md!">
      {children}
    </ListItem>
  );
};

const MemoCustomListItem = memo(CustomListItem);
export { MemoCustomListItem as CustomListItem };

const MemoCustomList = memo(CustomList);
export { MemoCustomList as CustomList };
