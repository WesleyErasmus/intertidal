import Banner from "../components/homePage/banner";
// import ImageList from "../components/homePage/ImageList";

const HomePage = () => {
  const title = "Intertidal";
  const text =
    "Welcom to the world of the sea!";
  const image =
    "https://images.unsplash.com/photo-1609079332148-ce057e967197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80";

  return (
    <>
      <Banner title={title} text={text} image={image} />
{/* 
      <ImageList /> */}
    </>
  );
};

export default HomePage;
