import * as styles from '../shared/styles';

const Home = () => {
  const randomNbr = Math.random() * 10;
  const conditional = randomNbr > 5 ? { color: 'darkorchid' } : null;

  return (
    <div>
      <div css={[styles.basic, conditional]}>Cool Styles</div>
      <div css={[styles.basic, styles.hover, styles.code]}>
        With <code>:hover</code>.
      </div>
      <div css={[styles.basic, styles.hover, styles.code, styles.animation]}>
        Let's bounce
      </div>
    </div>
  );
};

export default Home;
