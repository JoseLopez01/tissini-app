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
          <button className="rounded-full bg-black px-4 py-1 text-white font-bold">
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
