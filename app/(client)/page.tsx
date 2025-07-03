import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import HomeCategories from '@/components/HomeCategories';
import LatestBlog from '@/components/LatestBlog';
import ProductGrid from '@/components/ProductGrid';
import ShopByBrands from '@/components/ShopByBrands';
import { getCategories } from '@/sanity/queries';
import React from "react";

const Home = async () => {
  const categories = await getCategories(6);

  return(
    <>
    <div className="bg-shop-light-pink">
        <Container>
          <HomeBanner />
        </Container>
      </div>
    <div className="py-10">
        <Container>
          <ProductGrid />
        </Container>
      </div>
      <div>
        <Container>
          <HomeCategories categories={categories}/>
        </Container>
      </div>
      <div>
        <Container>
          <ShopByBrands/>
        </Container>
      </div>
      <div>
        <Container>
          <LatestBlog/>
        </Container>
      </div>
    </>
  );
};
export default Home;