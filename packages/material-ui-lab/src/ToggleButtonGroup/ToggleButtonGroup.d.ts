import * as React from 'react';

import { StandardProps } from '@material-ui/core';

export interface ToggleButtonGroupProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    ToggleButtonGroupClassKey,
    'onChange'
  > {
  selected?: boolean;
  exclusive?: boolean;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  value?: any;
}

export type ToggleButtonGroupClassKey = 'root' | 'selected';

declare const ToggleButtonGroup: React.ComponentType<ToggleButtonGroupProps>;

export default ToggleButtonGroup;
