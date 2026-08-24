import { AboutSection } from '@/modules/character/about-section';
import { ContactSection } from '@/modules/character/contact-section';
import { ExperienceSection } from '@/modules/character/experience-section';
import { CharacterSection } from '@/modules/character/character-section';
import { ProjectsSection } from '@/modules/character/project-section';
import { SkillsSection } from '@/modules/character/skills-section';

export default function Home() {
  return (
    <>
      <CharacterSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
