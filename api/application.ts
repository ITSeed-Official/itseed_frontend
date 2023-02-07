import { API2_DOMAIN } from 'util/const';
import { FormDataType, FileType } from 'util/form';
import { ErrorWithCode, ErrorCode } from 'util/error';

export const getFormData = async (): Promise<any> => {
  const response = await fetch(`${API2_DOMAIN}/applications/me`, { credentials: 'include' });
  console.log('getFormData status:', response.status);
  if (response.status === 401) {
    throw new ErrorWithCode('No auth', ErrorCode.NoAuth);
  }
  const result: FormDataType = await response.json();
  return result;
};

export const updateFormData = async (formData: Partial<FormDataType>): Promise<any> => {
  const response = await fetch(`${API2_DOMAIN}/applications/me`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: formData,
    }),
  });

  if (response.status === 401) {
    throw new ErrorWithCode('No auth', ErrorCode.NoAuth);
  }

  console.log('updateFormData status:', response.status);
};

type UploadFileResponse = {
  data: {
    path: string;
    name: string;
  };
};

export const uploadFile = async (file: File, type: FileType): Promise<UploadFileResponse> => {
  let formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('type', type);

  const response = await fetch(`${API2_DOMAIN}/files`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });

  if (response.status === 401) {
    throw new ErrorWithCode('No auth', ErrorCode.NoAuth);
  }

  const result: UploadFileResponse = await response.json();
  return result;
};
