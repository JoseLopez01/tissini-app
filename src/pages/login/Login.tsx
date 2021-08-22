import { useEffect, ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import MaskInput from 'react-maskinput';

import { login } from '../../core/store/auth/auth.actions';

export default function Login() {
  const dispatch = useDispatch();
  const [mobilePhone, setMobilePhone] = useState('');

  useEffect(() => {
    if (mobilePhone.trim().length === 12) {
      dispatch(login(mobilePhone));
    }
  }, [dispatch, mobilePhone]);

  function handleOnChange({ target }: any) {
    setMobilePhone(target.value);
  }

  return (
    <div className="h-screen grid grid-cols-4 gap-1">
      <div className="col-span-4 bg-login-background bg-cover relative bg-no-repeat">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen p-2 md:w-1/2">
          <div className="bg-logo-png w-3/5 h-36 md:h-56 bg-contain bg-no-repeat mx-auto bg-center"></div>
          <div className="font-medium text-center w-3/4 text-white mx-auto">
            Ingresa el número de teléfono de tu asesora independiente.
          </div>
          <form className="mt-1">
            <MaskInput
              onChange={handleOnChange}
              maskChar=""
              mask="000 000 0000"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
