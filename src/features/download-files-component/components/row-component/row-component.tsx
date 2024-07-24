import React, { useCallback } from 'react';

import { CheckboxComponent, CheckboxState } from '@components/checkbox-component';
import { StatusComponent } from '@components/status-component';

import { File } from '../../types';

import './row-component.scss';

interface RowComponentProps {
  file: File;
  onItemSelected?: (file: File, isSelected: boolean) => void;
}

export const RowComponent = ({ file, onItemSelected }: RowComponentProps): React.ReactNode => {
  const onCheckboxChange = useCallback(
    (newState: Exclude<CheckboxState, 'indeterminate'>): void => {
      onItemSelected?.(file, newState === 'fill');
    },
    [file, onItemSelected],
  );

  return (
    <div className={`row-item ${file.isSelected ? 'row-selected' : ''}`}>
      <div className="checkbox">
        <CheckboxComponent
          state={file.isSelected ? 'fill' : 'empty'}
          onChanged={onCheckboxChange}
          isDisabled={file.status !== 'available'}
          tooltipWhenDisabled="Only files with status `available` can be downloaded!"
        />
      </div>
      <div className="name">{file.name}</div>
      <div className="device">{file.device}</div>
      <div className="path" title={file.path}>
        {file.path}
      </div>
      <div className="status">
        <StatusComponent status={file.status} />
      </div>
    </div>
  );
};
