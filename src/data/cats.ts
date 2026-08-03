import coco1 from '../../assets/coco1.jpg'
import coco2 from '../../assets/coco2.jpg'
import coco3 from '../../assets/coco3.jpg'
import louis1 from '../../assets/louis1.jpg'
import louis2 from '../../assets/louis2.jpg'
import louis3 from '../../assets/louis3.jpg'

export type CatPhoto = {
  id: string
  src: string
  alt: string
}

export type Cat = {
  id: string
  name: string
  photos: CatPhoto[]
}

export const catsIntro =
  "These are my cats, Louis and Coco! My family got them in January 2024. They are from the same litter and are Balinese cats, a hypoallergenic breed, since my brother and dad are allergic to cats. Louis is a little dumb and spends most days staring at walls. Coco is hyper but very cooperative."

export const cats: Cat[] = [
  {
    id: 'louis',
    name: 'Louis',
    photos: [
      { id: 'louis1', src: louis1, alt: 'Louis' },
      { id: 'louis2', src: louis2, alt: 'Louis' },
      { id: 'louis3', src: louis3, alt: 'Louis' },
    ],
  },
  {
    id: 'coco',
    name: 'Coco',
    photos: [
      { id: 'coco1', src: coco1, alt: 'Coco' },
      { id: 'coco2', src: coco2, alt: 'Coco' },
      { id: 'coco3', src: coco3, alt: 'Coco' },
    ],
  },
]
