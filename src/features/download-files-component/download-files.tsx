import React, { useCallback, useEffect } from 'react';

import { getMockData } from '@modules/api/fetch';

import { IconLoadingComponent } from '@components/icons/loading';

import { ToolbarComponent } from './components/toolbar-component';
import { HeaderComponent } from './components/header-component';
import { RowComponent } from './components/row-component';

import { File } from './types';

import './download-files.scss';

export const DownloadFiles = (): React.ReactNode => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [selectableFilesLength, setSelectableFilesLength] = React.useState<number>(0);
  const [isLoading, setLoading] = React.useState<boolean>(true);

  useEffect((): void => {
    setTimeout(() => {
      try {
        getMockData('files.json').then((rsFiles): void => {
          setFiles(rsFiles);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false);
      }
    }, 800);
  }, []);

  useEffect((): void => {
    const selectableFilesLength = files.filter((f): boolean => f.status === 'available').length;
    setSelectableFilesLength(selectableFilesLength);
  }, [files]);

  const onRowCheckboxChange = useCallback(
    (file: File, isSelected: boolean): void => {
      const filesIndex = files.findIndex((f: File) => f.device === file.device && f.path === file.path);

      setFiles((prevFiles) => {
        const newFiles = [...prevFiles];
        newFiles[filesIndex].isSelected = isSelected;

        setSelectedFiles(newFiles.filter((f) => f.isSelected));
        return newFiles;
      });
    },
    [files],
  );

  const onMasterSelectClick = useCallback(
    (isSelected: boolean): void => {
      const filesNewState = files.map((f) => ({
        ...f,
        isSelected: f.status === 'available' ? isSelected : f.isSelected,
      }));
      setFiles(filesNewState);

      const selectedFiles = filesNewState.filter((f: File) => f.isSelected);
      setSelectedFiles(selectedFiles);
    },
    [files],
  );

  return (
    <div className="data-table">
      <ToolbarComponent
        selectableItemsLength={selectableFilesLength}
        selectedItems={selectedFiles}
        onSelectAllClick={onMasterSelectClick}
        isLoading={isLoading}
      />
      <HeaderComponent />
      {files.map((file) => (
        <RowComponent key={`${file.device}-${file.path}`} file={file} onItemSelected={onRowCheckboxChange} />
      ))}
      {isLoading && (
        <div className="loading-container">
          <IconLoadingComponent /> Loading, please wait.
        </div>
      )}
    </div>
  );
};
