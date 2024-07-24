import { File } from '../../features/download-files-component/types';

export type ApiResponse = {
  'files.json': File[];
};

export type Endpoint = keyof ApiResponse;
