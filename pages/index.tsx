import Container from "../components/Container";
import Image from "next/image";
import PostList from "../components/PostList";
import metadata from "../data/metadata";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useContext } from "react";
import { AppContext } from "context/WalletContext";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isConnected, walletAddress } = useContext(AppContext)
  console.log(isConnected)
  return (
    <Container className={''}>
      <div className={` my-7 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpg`}
            alt="main"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metadata.title}
          </span>
        </div>
        <PostList posts={posts} />
        { walletAddress }
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
