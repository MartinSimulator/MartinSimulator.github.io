import emgVizImage from '../../assets/emg-viz.png'
import liftTrackerImage from '../../assets/lift-tracker.png'
import { tools, type Tool } from './tools'

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
  tools?: Tool[]
}

export const projects: Project[] = [
  {
    id: 'lift-tracker',
    title: 'Weight Lifting Tracker',
    label: 'Lifting Tracker',
    image: liftTrackerImage,
    description:
      'This is a web-based app I built to track my weightlifting progress over time. It allows me to log my lifts and view my progress via graphs and tables.',
    githubUrl: 'https://github.com/MartinSimulator/lifting-tracker',
    demoVideoUrl: 'https://www.youtube.com/watch?v=Np_IGvwd-m0',
    tools: [
      tools.javascript,
      tools.react,
      tools.nodejs,
      tools.express,
      tools.mongodb,
      tools.vercel,
      tools.googlecloud,
    ],
  },
  {
    id: 'emg-viz',
    title: 'sEMG RIR Detector',
    label: 'sEMG RIR Detector',
    image: emgVizImage,
    description:
      'This is a project I am currently working on. My goal is to create a machine learning model that can detect reps in reserve during a lift in real-time using surface EMG.',
    githubUrl: 'https://github.com/MartinSimulator/muscle-activation',
    tools: [tools.python, tools.jupyter, tools.numpy, tools.matplotlib],
  },
]
