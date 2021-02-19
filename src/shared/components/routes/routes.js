import { lazy } from 'react'

const Home = lazy(() => import('../../../feature/home/Home'));
const Basic = lazy(() => import('../../../feature/basic/Basic'));
const Joke = lazy(() => import('../../../feature/joke/Joke'));
const EditJoke = lazy(() => import('../../../feature/joke/editJoke/EditJoke'));
const Marathon = lazy(() => import('../../../feature/marathon/Marathon'));


export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/basic', name: 'Basic', component: Basic },
  { path: '/joke', name: 'Joke', component: Joke },
  { path: '/joke/:id', name: 'Joke', component: EditJoke },
  { path: '/marathon', name: 'Marathon', component: Marathon },
]