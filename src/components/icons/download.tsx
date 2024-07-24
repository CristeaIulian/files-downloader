import React from 'react';
import type { SVGProps } from 'react';

export function IconDownloadComponent(props: SVGProps<SVGSVGElement>): React.ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" className="svg-theming" d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" />
    </svg>
  );
}
