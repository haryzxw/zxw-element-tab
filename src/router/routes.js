import page from '../components/page'
import person from '../components/person'
import battle from '../components/battle'
import story from '../components/story'

const routes = [
  { path: '/page', component:page, children:[
  	{
  		path:'person',component:person
  	},
  	{
  		path:'battle',component:battle
  	},
  	{
  		path:'story',component:story
  	},
  ]},
]
export default routes