import React from 'react';

import { Status } from '../../features/download-files-component/types';

import './status-component.scss';

interface StatusComponentProps {
  status: Status;
}

export const StatusComponent = ({ status }: StatusComponentProps): React.ReactNode => {
  return (
    <span className="status-container">
      <span className={status === 'available' ? 'status status-available' : ''}>{status}</span>
    </span>
  );
};
