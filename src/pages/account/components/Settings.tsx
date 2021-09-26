import styled from 'styled-components';
import { useCallback, useContext, useMemo } from 'react';
import { saveProfileInfo } from '../../../api';
import { SettingsForm } from './SettingsForm';
import { AuthContextType } from '../../../utilities/models';
import { AuthContext } from '../../../context/AuthContext';

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
  const { logout } = useContext<AuthContextType>(AuthContext);
  const handleSubmit = useCallback(
    (formData) => {
      return saveProfileInfo(formData)
        .then((data: any) => {
          if (!data.error) {
            console.log(data);
            console.log('save completed');
            window.location.reload();
            // setState('complete');
          } else {
            console.log('save completed with error');
            console.log(data);
          }
        }) // eslint-disable-next-line no-console
        .catch((err) => {
          logout();
          console.error(err);
        });
    },
    [logout]
  );

  const initialData = useMemo(() => {
    return {
      full_name: user?.fullName || '',
      email: user?.email || '',
    };
  }, [user]);

  return (
    <StyledSettings>
      <h2 style={{ fontSize: 36 }}>Изменить персональную информацию</h2>
      <SettingsForm handleSubmit={handleSubmit} initialData={initialData} />
    </StyledSettings>
  );
};

export default Settings;
