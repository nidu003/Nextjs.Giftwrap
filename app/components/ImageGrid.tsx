import Image from 'next/image';

function ImageGrid() {
  return (
    <div className="image-grid">
      <Image src="/birthday.png" alt="Birthday" width={300} height={200} />
      <Image src="/flowers.png" alt="Flowers" width={300} height={200} />
      <Image src="/corporate.png" alt="Corporate" width={300} height={200} />
      <Image src="/wedding.png" alt="Weddings" width={300} height={200} />
      <Image src="/anniversary.png" alt="Anniversary" width={300} height={200} />
    </div>
  );
}

export default ImageGrid;
