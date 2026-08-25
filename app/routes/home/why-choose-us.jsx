import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import styles from './why-choose-us.module.css';

const reasons = [
  {
    number: '01',
    title: 'Rilis lagu original tanpa biaya',
    description:
      'Isi formulir DMD, tentukan tanggal rilis, dan lagu akan aktif sesuai jadwal yang kamu pilih.',
  },
  {
    number: '02',
    title: 'Izin resmi cover lagu',
    description:
      'Pilih lagu dari publisher yang bekerja sama dengan WTM MUSIK, lalu ajukan permohonan Cover to Master.',
  },
  {
    number: '03',
    title: 'Dashboard royalty live',
    description:
      'Royalti, assets, dan analytics bisa dipantau kapan saja melalui dashboard WTM MUSIK.',
  },
  {
    number: '04',
    title: 'Kontrak digital jelas',
    description:
      'Ketentuan layanan dan skema pendapatan bisa dibaca saat registrasi, sebelum akun digunakan.',
  },
];

export function WhyChooseUs({ id, sectionRef, ...rest }) {
  return (
    <Section
      className={styles.whyUs}
      as="section"
      id={id}
      ref={sectionRef}
      {...rest}
    >
      <Heading level={2} as="h2" align="center" className={styles.title}>
        Gak cuma sekadar rilis, ini alasan banyak musisi dan konten kreator
        beralih ke WTM MUSIK
      </Heading>
      <div className={styles.grid}>
        {reasons.map(reason => (
          <div className={styles.card} key={reason.number}>
            <span className={styles.number} aria-hidden>
              {reason.number}
            </span>
            <Heading level={4} as="h3" className={styles.cardTitle}>
              {reason.title}
            </Heading>
            <Text className={styles.cardDescription} secondary>
              {reason.description}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
