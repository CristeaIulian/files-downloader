import React, { useCallback, useEffect } from 'react';

import './modal-component.scss';

interface ModalComponentProps {
  children?: React.ReactNode;
  dismissModal?: () => void;
  title: string;
  buttonConfirm?: {
    icon?: React.ReactNode;
    onClick?: () => void;
    label: string;
  };
  buttonCancel?: {
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
  };
}

export const ModalComponent = ({ children, buttonCancel, buttonConfirm, dismissModal, title }: ModalComponentProps): React.ReactNode => {
  const escapeKeyHandler = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        dismissModal?.();
      }
    },
    [dismissModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', escapeKeyHandler);

    return (): void => {
      window.removeEventListener('keydown', escapeKeyHandler);
    };
  }, [escapeKeyHandler]);

  return (
    <>
      <div className="modal-backdrop" onClick={dismissModal}></div>
      <div className="modal-container">
        <div className="modal-header">{title}</div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          {buttonConfirm && (
            <button onClick={buttonConfirm.onClick}>
              {buttonConfirm?.icon}
              {buttonConfirm?.label}
            </button>
          )}
          {buttonCancel && (
            <button onClick={buttonCancel.onClick}>
              {buttonCancel?.icon}
              {buttonCancel?.label}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
