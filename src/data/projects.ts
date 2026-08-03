import emgVizImage from '../../assets/emg-viz.png'
import liftTrackerImage from '../../assets/lift-tracker.png'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id?: string
  title?: string
  /** Short label shown on the card face */
  label?: string
  image?: string
  description?: string
  githubUrl?: string
  websiteUrl?: string
  demoVideoUrl?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'lift-tracker',
    title: 'Weight Lifting Tracker',
    label: 'Lifting Tracker',
    image: liftTrackerImage,
    description: 'This is a web-based app I built to track my weightlifting progress over time. It allows me to log my lifts and view my progress via graphs and tables.',
  },
  {
    id: 'emg-viz',
    title: 'sEMG RIR Detector',
    label: 'sEMG RIR Detector',
    image: emgVizImage,
    description: 'This is a project I am currently working on. My goal is to create a machine learning model that can detect reps in reserve during a lift in real-time using surface EMG.',
  },
]
