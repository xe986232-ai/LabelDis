import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import styles from './publisher-catalog.module.css';

export function PublisherCatalog({ id, sectionRef, ...rest }) {
  return (
    <Section
      className={styles.catalog}
      as="section"
      id={id}
      ref={sectionRef}
      {...rest}
    >
      <div className={styles.content}>
        <Heading level={2} as="h2" className={styles.title}>
          Akses Katalog Musik Terbesar dari 11 Publisher Mitra Resmi Kami
        </Heading>
        <Text className={styles.description} size="l" as="p" secondary>
          Dari lagu pop terbaru, tembang legendaris, hingga lagu yang sedang
          viral—semuanya tersedia melalui publisher yang bekerja sama dengan
          WTM MUSIK
        </Text>
      </div>
    </Section>
  );
}
