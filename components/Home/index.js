import Image from "next/image";
import { FullPage } from "styles/layouts";
import { Overlay } from "styles/components/Layouts";

const View = () => {
  return (
    <FullPage>
      <Overlay />
      <Image
        src="/static/images/home-banner-1.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Banner"
      />
    </FullPage>
  );
};

export default View;
