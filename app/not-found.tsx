import AnimatedButton from '@/components/ui/animated-button';
import not_found_gif from '@/public/gif/404-error.gif';
import Image from 'next/image';

function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center h-3/5 my-11">
      <section className="flex flex-col justify-center items-center max-w-[600px] text-center space-y-5">
        <Image
          src={not_found_gif.src}
          height={not_found_gif.height / 2}
          width={not_found_gif.width / 2}
          alt="404"
        />
        <h1 className="font-playfair-display text-4xl">
          Maybe you are not where you expected to be{' '}
        </h1>
        <p className="text-lg opacity-50">
          We are sorry but the page you are requesting is not available. Do not
          worry, go back to the Homepage or to the Shop clicking on the buttons
          below.
        </p>
        <div className="flex space-x-6">
          <AnimatedButton className="W-[450px]" width={400}>
            BACK TO HOME
          </AnimatedButton>
          <AnimatedButton>GO TO HOME</AnimatedButton>
        </div>
      </section>
    </section>
  );
}
export default NotFound;
