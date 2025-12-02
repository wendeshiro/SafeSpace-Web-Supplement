import styles from "./ReportDetails.module.css";
import BackButton from "./BackButton";

export default function ReportDetails() {
  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} />

      <div className={styles.header}>
        <h1 className={styles.title}>On-Site Discrimination and Harassment</h1>
        <div className={styles.meta}>
          <span>November 4, 2025</span>
          <span>10:15 AM</span>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Type of Report</h2>
        <div className={styles.tags}>
          <div className={styles.chip}>
            <span className={styles.chipText}>Discrimination</span>
          </div>
          <div className={styles.chip}>
            <span className={styles.chipText}>Verbal</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Trades Field</h2>
        <div className={styles.tags}>
          <div className={styles.chip}>
            <span className={styles.chipText}>Carpentry</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.sectionTitle}>AI Summary</h2>
          <span className={styles.aiLabel}>GPT-4o</span>
        </div>
        <div className={styles.summaryText}>
          <p>
            During a worksite interaction, several workers engaged in repeated instances of
            discriminatory and harassing behavior directed toward a female coworker and others on
            site. The incident involved the use of derogatory language, exclusionary behavior, and
            comments that reinforced gender-based bias and hostility.
          </p>
          <p>
            In the first instance, two workers made disparaging remarks about a female colleague,
            referring to her as “bossy” and using misogynistic slurs. Their tone and shared laughter
            indicated mockery and disrespect.
          </p>
          <p>
            Later, during a casual conversation about a sports game, one worker attempted to join in
            but was abruptly interrupted and dismissed, leading to visible discomfort and a sense of
            exclusion.
          </p>
          <p>
            The situation escalated when two workers began discussing the assignment of a woman to
            operate a jackhammer. They questioned her competence and implied she was only given the
            task for “optics” related to diversity initiatives. The remarks included crude,
            sexualized jokes and accusations about inappropriate personal relationships with a
            supervisor.
          </p>
          <p>
            The conversation culminated in explicitly offensive comments targeting both women and
            gender-diverse individuals, including homophobic and misogynistic slurs. Witnesses in
            the area appeared visibly uncomfortable and exchanged uneasy glances as the remarks
            continued.
          </p>
        </div>
      </div>

      <div className={`${styles.section} ${styles.actionSection}`}>
        <h2 className={styles.sectionTitle}>Recommended Actions</h2>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Provide Bystander Intervention and Respect Training</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Require Pre-Task Safety and Inclusion Briefings</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Implement a Zero-Tolerance Harassment Policy</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Enforce Proper PPE Usage at All Times</p>
        </div>
      </div>
    </div>
  );
}
