import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design System First',
    Svg: require('@site/static/img/undraw_design_components.svg').default,
    description: (
      <>
        Shadow UI embraces a design-token-driven workflow using Shopify Restyle, enabling your app to follow a consistent visual language from the start.
      </>
    ),
  },
  {
    title: 'Custom Components, Out of the Box',
    Svg: require('@site/static/img/undraw_custom_components.svg').default,
    description: (
      <>
        Includes beautifully crafted, theme-aware components like Buttons, Cards, Inputs, and more—ready to use and extend.
      </>
    ),
  },
  {
    title: 'Made for React Native Teams',
    Svg: require('@site/static/img/undraw_team_collaboration.svg').default,
    description: (
      <>
        From scalable theming to component-level customizations, Shadow UI is designed to accelerate development across teams and platforms.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
