import Image from 'next/image';

function ImageGrid() {
  return (
    <div className="image-grid-i">
      <div className="cont">
        <div className="birthday">
          <Image src="/birthday.png" alt="Birthday" width={500} height={375} className="w-full h-auto" />
        </div>
        <div className="flowers">
          <Image src="/flowers.png" alt="Flowers" width={500} height={779} className="w-full h-auto" />
        </div>
        <div className="corporate">
          <Image src="/corporate.png" alt="Corporate" width={500} height={375} className="w-full h-auto" />
        </div>
        <div className="weddings">
          <Image src="/wedding.png" alt="Weddings" width={500} height={375} className="w-full h-auto" />
        </div>
        <div className="anniversary">
          <Image src="/anniversary.png" alt="Anniversary" width={500} height={375} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
