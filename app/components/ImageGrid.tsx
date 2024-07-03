import Image from 'next/image';

function ImageGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="image-item">
          <Image src="/birthday.png" alt="Birthday" width={300} height={200} />
        </div>
        <div className="image-item">
          <Image src="/flowers.png" alt="Flowers" width={300} height={200} />
        </div>
        <div className="image-item">
          <Image src="/corporate.png" alt="Corporate" width={300} height={200} />
        </div>
        <div className="image-item">
          <Image src="/wedding.png" alt="Weddings" width={300} height={200} />
        </div>
        <div className="image-item">
          <Image src="/anniversary.png" alt="Anniversary" width={300} height={200} />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;