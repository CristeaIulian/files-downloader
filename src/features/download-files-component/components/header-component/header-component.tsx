import React from 'react';

import './header-component.scss';

export const HeaderComponent = (): React.ReactNode => (
  <div className="row-header">
    <div className="name">Name</div>
    <div className="device">Device</div>
    <div className="path">Path</div>
    <div className="status">Status</div>
  </div>
);
