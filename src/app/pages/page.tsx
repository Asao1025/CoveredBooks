import TopImageComponent from './topImage';
import FirstMessage from './firstMessage';
import PopContents from './popContents';

export default function page() {
  return (
    <body>
      <TopImageComponent />
      <FirstMessage />
      <PopContents />
      <a href="../loading">アンカーテキスト</a>

    </body>
  );
}
