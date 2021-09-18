import styled from 'styled-components';
import { useCallback } from 'react';
import { saveProfileInfo } from '../../../api';
import { SettingsForm } from './SettingsForm';

const StyledSettings = styled.div`
  > h2 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 34px;
    text-align: center;
    line-height: 1.4;
    position: relative;
    width: 100%;

    > div {
      position: absolute;
      top: 6px;
    }
  }
`;

const Settings = ({ user }: any) => {
  const handleSubmit = useCallback((formData) => {
    return saveProfileInfo(formData).then((data: any) => {
      if (!data.error) {
        console.log(data);
        console.log('save completed');

        // setState('complete');
      } else {
        console.log('save completed with error');
        console.log(data);
      }
    });
  }, []);

  const initialData = {
    full_name: user?.fullName || '',
    email: user?.email || '',
    photo: user?.photo || '',
  };

  return (
    <StyledSettings>
      <h2 style={{ fontSize: 36 }}>Изменить персональную информацию</h2>
      <SettingsForm handleSubmit={handleSubmit} initialData={initialData} />
    </StyledSettings>
  );
};

export default Settings;
