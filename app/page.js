import styles from "./page.module.css";
import ReportCard from "./components/ReportCard";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <ReportCard
        tags={["Carpentry", "Discrimination"]}
        title="On-Site Discrimination and Harassment"
        location="4376 Gilpin Cres, Burnaby BC"
        excerpt="During a worksite interaction, several workers engaged in repeated instances of discriminatory and harassing behavior directed toward a female coworker and others on site. The incident involved the use of derogatory language, exclusionary behavior, and comments that reinforced gender-based bias and hostility."
        date="2025-11-04"
        timestamp="10:15 AM"
      />
      <Button variant="primary">Generate Summary</Button>
      <Button variant="tertiary">Summarize Posts</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
}
