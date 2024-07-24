import React, { useCallback, useEffect } from 'react';

import { IconDownloadComponent } from '@components/icons/download';
import { CheckboxComponent, CheckboxState } from '@components/checkbox-component';

import { ModalDownloadComponent } from '../modal-download/modal-download';

import { File } from '../../types';

import './toolbar-component.scss';

interface ToolbarComponentProps {
  isLoading?: boolean;
  onSelectAllClick?: (isSelected: boolean) => void;
  selectedItems: File[];
  selectableItemsLength: number;
}

export const ToolbarComponent = ({ isLoading, onSelectAllClick, selectableItemsLength, selectedItems }: ToolbarComponentProps): React.ReactNode => {
  const [checkboxState, setCheckboxState] = React.useState<CheckboxState>('empty');
  const [selectedItemsLength, setSelectedItemsLength] = React.useState<number>(selectedItems.length);
  const [isDownloadModalVisible, setDownloadModalVisibility] = React.useState<boolean>(false);

  useEffect(() => {
    if (selectedItems.length > 0) {
      if (selectedItems.length === selectableItemsLength) {
        setCheckboxState('fill');
      }

      if (selectedItems.length !== selectableItemsLength) {
        setCheckboxState('indeterminate');
      }
    } else {
      setCheckboxState('empty');
    }

    const numSelectedItemsLength = selectedItems.filter((f) => f.isSelected).length;

    setSelectedItemsLength(numSelectedItemsLength);
  }, [selectableItemsLength, selectedItems]);

  const onCheckboxClick = useCallback(
    (newState: Exclude<CheckboxState, 'indeterminate'>): void => {
      onSelectAllClick?.(newState === 'fill');
    },
    [onSelectAllClick],
  );

  const onDownloadSelectedClick = useCallback((): void => {
    setDownloadModalVisibility(true);
  }, []);

  const onDismissModal = useCallback((): void => {
    setDownloadModalVisibility(false);
  }, []);

  const onConfirmModal = useCallback((): void => {
    console.log('Downloading files...');
    setDownloadModalVisibility(false);
  }, []);

  return (
    <div className="row-toolbar">
      <div className="checkbox">
        <CheckboxComponent state={checkboxState} onChanged={onCheckboxClick} isDisabled={isLoading} tooltipWhenDisabled="Disabled while loading files..." />
      </div>
      <div className="selected-items">{selectedItemsLength === 0 ? 'None Selected' : `Selected ${selectedItemsLength}`}</div>
      <div className="download-selected-container">
        <button onClick={onDownloadSelectedClick} disabled={selectedItemsLength === 0}>
          <IconDownloadComponent />
          Download selected
        </button>
      </div>
      {isDownloadModalVisible && <ModalDownloadComponent files={selectedItems} dismissModal={onDismissModal} confirmModal={onConfirmModal} />}
    </div>
  );
};
