import { ApiResponse, Endpoint } from './types';

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const basePath = '/mocks';

export const getMockData = async <T extends Endpoint>(endpoint: T): Promise<ApiResponse[T]> => {
  const response = await fetch(`${basePath}/${endpoint}`, { headers });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
