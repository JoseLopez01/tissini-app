export default function CategoryHeader({
  image,
  showMore = false,
}: CategoryHeaderProps) {
  return (
    <div
      className="w-full h-56 bg-contain relative bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {showMore && (
        <div className="absolute bottom-4 right-4">
          <button className="rounded-full bg-red-400 px-4 py-1 text-white font-bold hover:bg-red-300 transition duration-300">
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}

interface CategoryHeaderProps {
  image: string;
  showMore: boolean;
}
