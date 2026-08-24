import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import platformsRow from '~/assets/platforms-row.svg';
import styles from './platform-marquee.module.css';

export const PlatformMarquee = ({ id, className, ...rest }) => {
  return (
    <Section className={className} as="section" id={id} {...rest}>
      <Heading className={styles.heading} level={4} as="h2">
        Distributed everywhere your fans stream
      </Heading>
      <div className={styles.row}>
        <img
          src={platformsRow}
          alt="Spotify, Apple Music, Amazon Music, YouTube"
          className={styles.logos}
        />
      </div>
    </Section>
  );
};
