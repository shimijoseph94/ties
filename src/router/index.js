import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Jalanidhi from '@/components/Jalanidhi'
import RiverConservation from '@/components/RiverConservation'
import RiverRelinking from '@/components/RiverRelinking'
import PondRejuvenation from '@/components/PondRejuvenation'
import Domesticsolidwaste from '@/components/Domesticsolidwaste'
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

  ]
})
