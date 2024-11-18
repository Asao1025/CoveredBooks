import TopImageComponent from './topImage';
import FirstMessage from './firstMessage';
import PopContents from './popContents';
import CategoryButtons from './categoryButtons'

const page = () => {
  return (
    <body>
      <TopImageComponent />
      <FirstMessage />
      <CategoryButtons />
      <PopContents />
      <a href="../loading">アンカーテキスト</a>
    </body>
  );
};

export default page
