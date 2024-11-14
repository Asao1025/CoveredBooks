import TopImageComponent from './topImage';
import FirstMessage from './firstMessage';
import PopContents from './popContents';
import CategoryButtons from './categoryButtons'

export default function page() {
  return (
    <body>
      <TopImageComponent />
      <FirstMessage />
      <CategoryButtons />
      <PopContents />
      <a href="../loading">アンカーテキスト</a>
    </body>
  );
}
