import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API Tutorials',
    Svg: require('@site/static/img/home-apis.svg').default,
    description: (
      <>
        Learn step by step, master API documentation with clarity and precision, and craft detailed references.
      </>
    ),
  },
  {
    title: 'AI Tutorials',
    Svg: require('@site/static/img/home-ai.svg').default,
    description: (
      <>
        Unlock Artificial Intelligence, master innovation with ease, and stay ahead of the curve.
      </>
    ),
  },
  {
    title: 'Content Creation & Tools',
    Svg: require('@site/static/img/home-content-creation.svg').default,
    description: (
      <>
        Create with confidence, document with clarity, and master the tools that bring your content to life.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
