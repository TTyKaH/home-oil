import { ref } from 'vue'

const oilList = [
  {
    name: 'Подсолнечное',
    type: 'Холодный/Горячий отжим',
    img: 'oil-sunflower',
  },
  {
    name: 'Черный тмин',
    type: 'Холодный отжим',
    img: 'oil-black-cumin',
  },
  {
    name: 'Тыквенное',
    type: 'Холодный отжим',
    img: 'oil-pumpkin',
  },
  {
    name: 'Льняное',
    type: 'Холодный отжим',
    img: 'oil-flax',
  },
  {
    name: 'Горчичное',
    type: 'Холодный отжим',
    img: 'oil-mustard',
  },
  {
    name: 'Абрикосовое',
    type: 'Холодный отжим',
    img: 'oil-apricot',
  },
  {
    name: 'Маковое',
    type: 'Холодный отжим',
    img: 'oil-poppy',
  },
  {
    name: 'Черная горчица',
    type: 'Холодный отжим',
    img: 'oil-black-mustard',
  },
]

const activeOil = ref(null)

const UseOilList = () => {
  const setActiveOil = (oil) => (activeOil.value = oil)
  const clearActiveOil = () => (activeOil.value = null)

  return {
    oilList,
    activeOil,
    setActiveOil,
    clearActiveOil,
  }
}

export default UseOilList
