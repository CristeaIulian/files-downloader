export enum Status {
  AVAILABLE = 'available',
  SCHEDULED = 'scheduled',
}

export interface File {
  name: string;
  device: string;
  path: string;
  status: Status;
  isSelected?: boolean;
}
