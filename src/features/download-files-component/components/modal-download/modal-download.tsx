import React, { JSX, useMemo } from 'react';

import { IconDownloadComponent } from '@components/icons/download';
import { IconCancelComponent } from '@components/icons/cancel';
import { ModalComponent } from '@components/modal-component/modal-component';

import { File } from '../../types';

import './modal-download.scss';

interface ModalDownloadComponentProps {
  dismissModal?: () => void;
  confirmModal?: () => void;
  files: File[];
}

export const ModalDownloadComponent = ({ confirmModal, dismissModal, files }: ModalDownloadComponentProps): React.ReactNode => {
  const fileRows: JSX.Element[] = useMemo(
    () =>
      files.map((file) => (
        <div key={file.path} className={`modal-row-item ${file.isSelected ? 'row-selected' : ''}`}>
          <div className="device">{file.device}</div>
          <div className="path" title={file.path}>
            {file.path}
          </div>
        </div>
      )),
    [files],
  );

  return (
    <ModalComponent
      title="Download selected files"
      buttonConfirm={{ icon: <IconDownloadComponent />, label: 'Download', onClick: confirmModal }}
      buttonCancel={{ icon: <IconCancelComponent />, label: 'Cancel', onClick: dismissModal }}
      dismissModal={dismissModal}
    >
      <div className="modal-download-container">
        <div className="modal-row-header">
          <div className="device">Device</div>
          <div className="path">Path</div>
        </div>
        {fileRows}
      </div>
    </ModalComponent>
  );
};
