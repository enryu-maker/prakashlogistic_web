import alltransport from "../Images/all-transport.jpeg";
import plane from "../Images/plane.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function Caro() {
  return (
    <Carousel
      className="rounded-none h-[80vh]"
      autoplay={true}
      autoplayDelay={3000}
      loop={true}

    >
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900">
        <img
          src={alltransport}
          alt="all transport"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              FAST CERTIFIED & BEST WORLD WIDE SERVICE
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Professionally strategize stand-alone functionalities and
              cooperative total linkage. Objectively predominate virtual quality
              vectors with orthogonal.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" className="bg-deep-orange-600">
                Explore More
              </Button>
              <a href="/contact">
              <Button size="lg" className="text-deep-orange-600" variant="text">
                Contact us
              </Button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900">
        <img
          src={plane}
          alt="plane"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              FAST CERTIFIED & BEST WORLD WIDE SERVICE
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Professionally strategize stand-alone functionalities and
              cooperative total linkage. Objectively predominate virtual quality
              vectors with orthogonal.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" className="bg-deep-orange-600">
                Explore More
              </Button>
              <a href="/contact">
              <Button size="lg" className="text-deep-orange-600" variant="text">
                Contact us
              </Button></a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
