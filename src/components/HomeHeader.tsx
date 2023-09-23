import poster from '@/assets/aZ1nd7MH27A-HD.jpg';
import Link from 'next/link';

const HomeHeader = () => {
  return (
    <>
      <header className="w-screen h-screen relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 py-16 px-8 container mx-auto">
          <div className="flex justify-between">
            <h1 className="text-2xl text-white font-bold">Soul Trails</h1>
            <div className="flex gap-8">
              <Link
                className="font-semibold uppercase text-white hover:text-gray-200 active:text-gray-200 "
                href="/"
              >
                Films
              </Link>
              <Link
                className="font-semibold uppercase text-white hover:text-gray-200 active:text-gray-200 "
                href="/photography"
              >
                Photography
              </Link>
              <Link
                className="font-semibold uppercase text-white hover:text-gray-200 active:text-gray-200 "
                href="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="https://res.cloudinary.com/doqobsccu/image/upload/v1695469900/soul-trails/aZ1nd7MH27A-HD_zx1or1.jpg"
          className="w-full h-screen object-cover object-center fixed bg-no-repeat -z-10"
        >
          <source src='https://firebasestorage.googleapis.com/v0/b/soul-trails.appspot.com/o/vd.mp4?alt=media&token=b88b86e4-5020-4d2f-9053-2265fe2327c0' />
        </video>
      </header>
    </>
  );
};

export default HomeHeader;
