import React from 'react';
import type { SVGProps } from 'react';

export function IconCheckboxFillComponent(props: SVGProps<SVGSVGElement>): React.ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        className="svg-theming"
        d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z"
      ></path>
      <path fill="none" d="m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z"></path>
    </svg>
  );
}
