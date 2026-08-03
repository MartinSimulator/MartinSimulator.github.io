import expressLogo from '../../assets/express-original.svg'
import googleCloudLogo from '../../assets/googlecloud-original.svg'
import javascriptLogo from '../../assets/javascript-original.svg'
import jupyterLogo from '../../assets/jupyter-original.svg'
import matplotlibLogo from '../../assets/matplotlib-original.svg'
import mongodbLogo from '../../assets/mongodb-original.svg'
import nodejsLogo from '../../assets/nodejs-original.svg'
import numpyLogo from '../../assets/numpy-original.svg'
import pythonLogo from '../../assets/python-original.svg'
import reactLogo from '../../assets/react-original.svg'
import vercelLogo from '../../assets/vercel-original.svg'

export type Tool = {
  id: string
  name: string
  href: string
  logo?: string
}

export const tools = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: javascriptLogo,
  },
  react: {
    id: 'react',
    name: 'React',
    href: 'https://react.dev/',
    logo: reactLogo,
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    href: 'https://nodejs.org/',
    logo: nodejsLogo,
  },
  express: {
    id: 'express',
    name: 'Express',
    href: 'https://expressjs.com/',
    logo: expressLogo,
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    logo: mongodbLogo,
  },
  vercel: {
    id: 'vercel',
    name: 'Vercel',
    href: 'https://vercel.com/',
    logo: vercelLogo,
  },
  googlecloud: {
    id: 'googlecloud',
    name: 'Google Cloud',
    href: 'https://cloud.google.com/',
    logo: googleCloudLogo,
  },
  python: {
    id: 'python',
    name: 'Python',
    href: 'https://www.python.org/',
    logo: pythonLogo,
  },
  jupyter: {
    id: 'jupyter',
    name: 'Jupyter',
    href: 'https://jupyter.org/',
    logo: jupyterLogo,
  },
  numpy: {
    id: 'numpy',
    name: 'NumPy',
    href: 'https://numpy.org/',
    logo: numpyLogo,
  },
  matplotlib: {
    id: 'matplotlib',
    name: 'Matplotlib',
    href: 'https://matplotlib.org/',
    logo: matplotlibLogo,
  },
} as const satisfies Record<string, Tool>
