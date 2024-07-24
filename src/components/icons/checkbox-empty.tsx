import React from 'react';
import type { SVGProps } from 'react';

export function IconCheckboxEmptyComponent(props: SVGProps<SVGSVGElement>): React.ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32" {...props}>
      <path className="svg-theming" fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></path>
    </svg>
  );
}
