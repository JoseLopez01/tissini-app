import { NavLink } from 'react-router-dom';

export default function FooterBar(props: any) {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 bg-white shadow-lg z-10 w-full h-14">
      <NavLink to="" activeClassName="text-red-400" exact>
        <button className="mx-10">
          <i className="fas fa-home text-xl"></i>
          <br />
          <span>
            Categories
          </span>
        </button>
      </NavLink>
      <NavLink to="/cart" activeClassName="text-red-400" exact>
        <button className="mx-10">
          <i className="fas fa-shopping-cart text-xl"></i>
          <br />
          <span>
            Carrito
          </span>
        </button>
      </NavLink>
    </div>
  );
}
