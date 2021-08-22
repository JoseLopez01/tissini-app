import { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../core/store/auth/auth.actions';

export default function Login() {
  const dispatch = useDispatch();
  const [mobilePhone, setMobilePhone] = useState('');

  useEffect(() => {
    if (mobilePhone.trim().length === 10) {
      dispatch(login(mobilePhone));
    }
  }, [dispatch, mobilePhone]);

  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
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
            <input
              type="tel"
              className="outline-none border w-full p-3 rounded border-white bg-transparent placeholder-white font-medium text-white"
              placeholder="Teléfono"
              onChange={handleOnChange}
              value={mobilePhone}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
