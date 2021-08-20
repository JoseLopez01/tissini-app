export default function NavBar() {
  return (
    <div className="h-10 bg-gray-400 flex p-2">
      <div className="my-auto text-lg">Ferchitos Store Tissini App</div>
      <div className="my-auto ml-auto">
        <button>
          <i className="fas fa-phone-alt text-lg"></i>
        </button>
        <button className="mx-5">
          <i className="fas fa-sign-out-alt text-lg"></i>
        </button>
      </div>
    </div>
  );
}
