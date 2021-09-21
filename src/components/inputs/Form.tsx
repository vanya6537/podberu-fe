import { useCallback, useEffect, useState } from 'react';

export const Form = ({
  render,
  onSubmit,
  initialDataState = {},
  initialErrorState = true,
  ...rest
}: {
  onSubmit: (data: any) => Promise<any> | undefined;
  [key: string]: any;
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialDataState);
  const [errors, setErrors]: [{ [key: string]: string | null }, any] = useState({});
  const [errorState, setErrorState]: [boolean, any] = useState(initialErrorState);

  const updateFormData = useCallback(
    (data: any) => {
      setFormData((d: any) => ({ ...d, ...data }));
    },
    [setFormData]
  );

  const handleInputChange = useCallback(
    ({ name, value, error = undefined }: any) => {
      updateFormData({ [name]: value });
      console.log('update form data?');
      console.log({ name, value });
      setErrors((e: { [key: string]: string | null }) => ({ ...e, [name]: error }));
    },
    [updateFormData, setErrors]
  );

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorState(Object.values(errors).some((v) => v && v.length > 0));
    }
  }, [errors]);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (onSubmit) {
        updateFormData({ fetching: true });
        // @ts-ignore
        onSubmit(formData).finally(() => updateFormData({ fetching: false }));
      }
    },
    [onSubmit, formData, updateFormData]
  );

  return (
    <form {...rest} onSubmit={handleSubmit}>
      {render({
        hasError: errorState,
        isFetching: formData.fetching,
        handleInputChange,
        formData,
      })}
    </form>
  );
};
