import React, { useCallback, useEffect } from 'react';

import { IconCheckboxEmptyComponent } from '@components/icons/checkbox-empty';
import { IconCheckboxFillComponent } from '@components/icons/checkbox-fill';
import { IconCheckboxIndeterminateComponent } from '@components/icons/checkbox-indeterminate';

import './checkbox-component.scss';

export type CheckboxState = 'empty' | 'indeterminate' | 'fill';

interface CheckboxComponentProps {
  isDisabled?: boolean;
  onChanged?: (newState: Exclude<CheckboxState, 'indeterminate'>) => void;
  state?: CheckboxState;
  tooltipWhenDisabled?: string;
}

export const CheckboxComponent = ({ isDisabled, onChanged, state = 'empty', tooltipWhenDisabled }: CheckboxComponentProps): React.ReactNode => {
  const [currentState, setState] = React.useState<CheckboxState>(state);

  useEffect((): void => {
    setState(state);
  }, [state]);

  const onCheckboxClick = useCallback((): undefined => {
    if (isDisabled) {
      return;
    }

    const newState: CheckboxState = currentState === 'fill' ? 'empty' : 'fill';
    setState(newState);
    onChanged?.(newState);
  }, [currentState, isDisabled, onChanged]);

  return (
    <div className={`checkbox ${isDisabled ? 'disabled' : ''}`} title={isDisabled ? tooltipWhenDisabled : undefined}>
      {currentState === 'empty' && <IconCheckboxEmptyComponent onClick={onCheckboxClick} />}
      {currentState === 'indeterminate' && <IconCheckboxIndeterminateComponent onClick={onCheckboxClick} />}
      {currentState === 'fill' && <IconCheckboxFillComponent onClick={onCheckboxClick} />}
    </div>
  );
};
