import { useCallback, useEffect, useState } from 'react';

export const Form = ({
  render,
  onSubmit,
  initialDataState = {},
  initialErrorState = true,
  ...rest
}: {
  onSubmit: (data: any) => Promise<any>;
  [key: string]: any;
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialDataState);
  const [errors, setErrors]: [{ [key: string]: string | null }, any] = useState({});
  const [errorState, setErrorState]: [boolean, any] = useState(initialErrorState);

  const updateFormData = (data: any) => {
    setFormData((d: any) => ({ ...d, ...data }));
  };

  const handleInputChange = useCallback(({ name, value, error = undefined }: any) => {
    updateFormData({ [name]: value });
    setErrors((e: { [key: string]: string | null }) => ({ ...e, [name]: error }));
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorState(Object.values(errors).some((v) => v && v.length > 0));
    }
  }, [errors]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) {
      updateFormData({ fetching: true });
      onSubmit(formData).finally(() => updateFormData({ fetching: false }));
    }
  };

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
