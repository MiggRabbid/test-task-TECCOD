import * as Icons from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material';

export type TLibraryIconMUIName = keyof typeof Icons;

type TBaseIconProps = Omit<SvgIconProps, 'children' | 'fontSize' | 'color'> & {
  color?: SvgIconProps['color'];
};

export interface ICustomIconProps extends TBaseIconProps {
  name: TLibraryIconMUIName;
}
