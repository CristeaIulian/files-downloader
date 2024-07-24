import React from 'react';

import { DownloadFiles } from './features/download-files-component/download-files';

export const App = (): React.ReactNode => {
  return (
    <div className="app-container">
      <DownloadFiles />
    </div>
  );
};
