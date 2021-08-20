import { Link } from 'react-router-dom';

export default function FooterBar() {
  return (
    <div className="flex justify-around sticky bottom-0 p-2">
      <Link to="">
        <button>
          <i className="fas fa-home text-xl"></i>
          <br />
          <span>
            Categories
          </span>
        </button>
      </Link>
      <Link to="">
        <button>
          <i className="fas fa-file-contract text-xl"></i>
          <br />
          <span>
            Catalogo
          </span>
        </button>
      </Link>
      <Link to="">
        <button>
          <i className="fas fa-shopping-cart text-xl"></i>
          <br />
          <span>
            Carrito
          </span>
        </button>
      </Link>
    </div>
  );
}
