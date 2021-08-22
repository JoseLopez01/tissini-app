import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/auth.actions';

export default function NavBar() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="h-14 flex p-2 shadow-md bg-gray-100 sticky top-0 z-10">
      <div className="my-auto text-lg text-red-400 font-semibold truncate">
        Ferchitos Store Tissini App
      </div>
      <div className="my-auto ml-auto text-red-400">
        <button className="rounded-full hover:bg-red-200 w-5 h-5 transition duration-200">
          <i className="fas fa-phone-alt text-lg"></i>
        </button>
        <button
          className="mx-5 rounded-full hover:bg-red-200 w-5 h-5 transition duration-200"
          onClick={handleLogout}
        >
          <i className="fas fa-sign-out-alt text-lg"></i>
        </button>
      </div>
    </div>
  );
}
