import React from 'react';
import type { SVGProps } from 'react';

export function IconCheckboxIndeterminateComponent(props: SVGProps<SVGSVGElement>): React.ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" className="svg-theming" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 14H10v-4h12Z"></path>
      <path fill="none" d="M22 18H10v-4h12Z"></path>
    </svg>
  );
}
