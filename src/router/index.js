import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Jalanidhi from '@/components/Jalanidhi'
import RiverConservation from '@/components/RiverConservation'
import RiverRelinking from '@/components/RiverRelinking'
import PondRejuvenation from '@/components/PondRejuvenation'
import Domesticsolidwaste from '@/components/Domesticsolidwaste'
import Corporate from '@/components/Corporate'
import IndividualPartnership from '@/components/IndividualPartnership'
import Internship from '@/components/Internship'
import Volunteer from '@/components/Volunteer'
import Jobs from '@/components/Jobs'
import Donate from '@/components/Donate'
import Services from '@/components/Services'
import Watersampleanalysis from '@/components/Watersampleanalysis'
import AntimicrobialTests from '@/components/AntimicrobialTests'
import PhytochemicalAnalysis from '@/components/PhytochemicalAnalysis'
import SoilsampleAnalysis from '@/components/SoilsampleAnalysis'
import NutritionalAnalysis from '@/components/NutritionalAnalysis'
import MicrobiologicalAnalysis from '@/components/MicrobiologicalAnalysis'
import Toxicological from '@/components/Toxicological'
import ThematicGardens from '@/components/ThematicGardens'
import Pachappu from '@/components/Pachappu'
import Thanal from '@/components/Thanal'
import Pachamuttam from '@/components/Pachamuttam'
import Ottamooli from '@/components/Ottamooli'
import Plantdiversity from '@/components/Plantdiversity'
import MushroomFarming from '@/components/MushroomFarming'
import OrganicFarming from '@/components/OrganicFarming'
import EnvironmentEducation from '@/components/EnvironmentEducation'
import RiverAuditing from '@/components/RiverAuditing'
import Reports from '@/components/Reports'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Jalanidhi',
      name: 'Jalanidhi',
      component: Jalanidhi
    },
    {
      path: '/RiverConservation',
      name: 'RiverConservation',
      component: RiverConservation
    },
    {
      path: '/RiverRelinking',
      name: 'RiverRelinking',
      component: RiverRelinking
    },
    {
      path: '/PondRejuvenation',
      name: 'PondRejuvenation',
      component: PondRejuvenation
    },
    {
      path: '/Domesticsolidwaste',
      name: 'Domesticsolidwaste',
      component:Domesticsolidwaste
    },
    {
      path: '/Corporate',
      name: 'Corporate',
      component:Corporate
    },
    {
      path: '/IndividualPartnership',
      name: 'IndividualPartnership',
      component:IndividualPartnership
    },
    {
      path: '/Internship',
      name: 'Internship',
      component:Internship
    },
    {
      path: '/Volunteer',
      name: 'Volunteer',
      component:Volunteer
    },
    {
      path: '/Jobs',
      name: 'Jobs',
      component:Jobs
    },
    {
      path: '/Donate',
      name: 'Donate',
      component:Donate,
      props:true
    },
    {
      path: '/Services',
      name: 'Services',
      component:Services,
      
    },
    {
      path: '/Watersampleanalysis',
      name: 'Watersampleanalysis',
      component:Watersampleanalysis,
    
    },
    {
      path: '/AntimicrobialTests',
      name: 'AntimicrobialTests',
      component:AntimicrobialTests,
    
    },
    {
      path: '/PhytochemicalAnalysis',
      name: 'PhytochemicalAnalysis',
      component:PhytochemicalAnalysis,
    
    },
    {
      path: '/SoilsampleAnalysis',
      name: 'SoilsampleAnalysis',
      component:SoilsampleAnalysis,
    
    },
    {
      path: '/NutritionalAnalysis',
      name: 'NutritionalAnalysis',
      component:NutritionalAnalysis,
    
    },
    {
      path: '/MicrobiologicalAnalysis',
      name: 'MicrobiologicalAnalysis',
      component:MicrobiologicalAnalysis,
    
    },
    {
      path: '/Toxicological',
      name: 'Toxicological',
      component:Toxicological,
    
    },
    {
      path: '/ThematicGardens',
      name: 'ThematicGardens',
      component:ThematicGardens,
    
    },
    {
      path: '/Pachappu',
      name: 'Pachappu',
      component:Pachappu,
    
    },
    {
      path: '/Thanal',
      name: 'Thanal',
      component:Thanal,
    
    },
    {
      path: '/Pachamuttam',
      name: 'Pachamuttam',
      component:Pachamuttam,
    
    },
    {
      path: '/Ottamooli',
      name: 'Ottamooli',
      component:Ottamooli,
    
    },
    {
      path: '/Plantdiversity',
      name: 'Plantdiversity',
      component:Plantdiversity,
    
    },
    {
      path: '/MushroomFarming',
      name: 'MushroomFarming',
      component:MushroomFarming,
    
    },
    {
      path: '/OrganicFarming',
      name: 'OrganicFarming',
      component:OrganicFarming,
    
    },
    {
      path: '/EnvironmentEducation',
      name: 'EnvironmentEducation',
      component:EnvironmentEducation,
    
    },
    {
      path: '/RiverAuditing',
      name: 'RiverAuditing',
      component:RiverAuditing,
    
    },
    {
      path: '/Reports',
      name: 'Reports',
      component:Reports,
    
    },
    

  ]
})
