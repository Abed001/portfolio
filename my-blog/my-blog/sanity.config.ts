// The absolute minimum viable studio configuration
import {defineConfig } from 'sanity'

import {deskTool} from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
const config=defineConfig
({
  projectId: '2rk1a7cl',
  dataset: 'production',
  title:"my personal website",
  apiVersion:"2023-07-04",
  basePath:"/studio",
  plugins:[deskTool()],
  schema:{types:[project]},
  studio:{
   components:{
    logo:Logo,
    navbar:StudioNavbar
   }
  },
  theme:myTheme
})
export default config