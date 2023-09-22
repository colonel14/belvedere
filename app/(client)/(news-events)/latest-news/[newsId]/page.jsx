import RelatedList from "@/components/RelatedList";
import { newsList } from "@/data";
import "@/styles/news-events.css";
import Image from "next/image";

function NewsDetails() {
  return (
    <div className="details__page news__details">
      <div className="container">
        <div className="details__page-hero">
          <Image
            src={"/details-hero.jpg"}
            fill
            alt="hero image"
            unoptimized
            className="object-cover"
            priority
          />
        </div>
        <div className="details__page-inner">
          <div className="flex flex-col lg:grid lg:grid-cols-12">
            <div className="col-span-9 app__section-left">
              <h2 className="details__page-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <time className="details__page-date">
                <Image
                  src="/calendar-icon.svg"
                  width={20}
                  height={17}
                  alt="calendar icon"
                />
                2023/01/13
              </time>
              <div className="details__page-content">
                <p className="page__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mattis nunc sed blandit libero volutpat sed cras ornare arcu.
                  Diam sollicitudin tempor id eu. Magnis dis parturient montes
                  nascetur. Amet justo donec enim diam vulputate ut. Interdum
                  consectetur libero id faucibus nisl tincidunt eget nullam non.
                  Urna nec tincidunt praesent semper feugiat nibh. Elementum
                  nibh tellus molestie nunc non blandit massa. Suspendisse
                  potenti nullam ac tortor vitae purus faucibus ornare. Tortor
                  consequat id porta nibh venenatis. Eros in cursus turpis massa
                  tincidunt dui ut ornare lectus. Fames ac turpis egestas
                  integer eget aliquet. Interdum varius sit amet mattis
                  vulputate enim. At tellus at urna condimentum mattis
                  pellentesque id nibh. Non tellus orci ac auctor. Est sit amet
                  facilisis magna etiam tempor orci eu.
                </p>
                <p className="page__text">
                  Sem viverra aliquet eget sit amet tellus cras. Est
                  pellentesque elit ullamcorper dignissim. Vel orci porta non
                  pulvinar neque laoreet. Eget gravida cum sociis natoque
                  penatibus et magnis. Purus semper eget duis at tellus. Sed
                  risus ultricies tristique nulla aliquet enim tortor at. Netus
                  et malesuada fames ac turpis. Diam volutpat commodo sed
                  egestas. Mauris rhoncus aenean vel elit scelerisque. Elementum
                  nisi quis eleifend quam adipiscing vitae proin sagittis. Felis
                  donec et odio pellentesque. Ut sem nulla pharetra diam sit
                  amet nisl suscipit adipiscing. Lorem mollis aliquam ut
                  porttitor. Vitae elementum curabitur vitae nunc sed velit
                  dignissim sodales ut. Diam in arcu cursus euismod quis viverra
                  nibh. Faucibus interdum posuere lorem ipsum dolor sit amet
                  consectetur adipiscing. Accumsan sit amet nulla facilisi morbi
                  tempus iaculis urna id. Imperdiet dui accumsan sit amet nulla.
                </p>
                <p className="page__text">
                  Turpis egestas integer eget aliquet nibh praesent. In ante
                  metus dictum at tempor commodo. Et ultrices neque ornare
                  aenean euismod elementum nisi. Consequat semper viverra nam
                  libero justo laoreet sit amet. Malesuada nunc vel risus
                  commodo viverra maecenas accumsan lacus. Urna nec tincidunt
                  praesent semper feugiat nibh sed. In ornare quam viverra orci
                  sagittis. Id aliquet lectus proin nibh nisl condimentum id
                  venenatis. Tellus in metus vulputate eu. Eget dolor morbi non
                  arcu risus quis. Tortor dignissim convallis aenean et tortor
                  at risus viverra. Tortor vitae purus faucibus ornare.
                </p>
                <p className="page__text">
                  Sit amet porttitor eget dolor morbi. Ullamcorper velit sed
                  ullamcorper morbi. Feugiat scelerisque varius morbi enim nunc
                  faucibus. Dignissim suspendisse in est ante in nibh mauris
                  cursus mattis. Consectetur a erat nam at lectus urna duis. Cum
                  sociis natoque penatibus et magnis dis. Varius quam quisque id
                  diam vel quam elementum. Vitae justo eget magna fermentum.
                  Egestas quis ipsum suspendisse ultrices. Congue nisi vitae
                  suscipit tellus mauris a diam maecenas sed. Proin sed libero
                  enim sed faucibus turpis. Est placerat in egestas erat.
                </p>
                <p className="page__text">
                  Ut porttitor leo a diam sollicitudin tempor id. Aliquam id
                  diam maecenas ultricies mi eget mauris pharetra. Vel eros
                  donec ac odio. Aliquam purus sit amet luctus venenatis lectus
                  magna fringilla. A condimentum vitae sapien pellentesque. Ut
                  tortor pretium viverra suspendisse potenti nullam ac. Odio
                  facilisis mauris sit amet massa vitae. Egestas congue quisque
                  egestas diam in arcu. Elementum integer enim neque volutpat ac
                  tincidunt vitae semper quis. Eget mi proin sed libero enim
                  sed. Donec enim diam vulputate ut. Habitant morbi tristique
                  senectus et netus et. Magnis dis parturient montes nascetur
                  ridiculus. Purus gravida quis blandit turpis cursus in hac
                  habitasse platea. Cum sociis natoque penatibus et magnis dis
                  parturient montes. Tincidunt vitae semper quis lectus. Ac
                  tincidunt vitae semper quis lectus. Quis lectus nulla at
                  volutpat diam ut venenatis.
                </p>
              </div>
            </div>
            <div className="col-span-3 app__section-right">
              <div className="related__news">
                <h3 className="related__title">Related</h3>
                <RelatedList newsList={newsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
