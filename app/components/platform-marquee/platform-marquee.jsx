import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { platforms } from './platforms';
import styles from './platform-marquee.module.css';

// NOTE: `platforms.jsx` ships with simplified, stylised glyphs so this
// component works without any external assets. For production, swap each
// `icon` for the platform's official brand-kit SVG/PNG — most services
// (Spotify, Apple, Amazon, YouTube, etc.) publish a press/brand page with
// logo downloads and usage guidelines you'll want to follow.

export const PlatformMarquee = ({ id, className, ...rest }) => {
  return (
    <Section className={className} as="section" id={id} {...rest}>
      <Heading className={styles.heading} level={4} as="h2">
        Distributed everywhere your fans stream
      </Heading>
      <div className={styles.row}>
        {platforms.map(platform => (
          <span className={styles.icon} key={platform.name} title={platform.name}>
            {platform.icon}
          </span>
        ))}
      </div>
    </Section>
  );
};
