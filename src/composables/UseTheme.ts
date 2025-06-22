import { onMounted, type Ref, ref, watch } from 'vue'

const UseTheme = () => {
  const themeName: Ref<string> = ref('light')

  watch(
    () => themeName.value,
    () => {
      if (themeName.value === 'light') {
        document.body.classList.add('theme-light')
        document.body.classList.remove('theme-dark')
      } else {
        document.body.classList.add('theme-dark')
        document.body.classList.remove('theme-light')
      }
    },
    {
      immediate: true,
    },
  )

  const getSystemTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  const getSavedTheme = () => {
    return localStorage.getItem('theme')
  }

  const getPreInstalledTheme = () => {
    const savedTheme = getSavedTheme()

    if (savedTheme) {
      return savedTheme
    }

    return getSystemTheme()
  }

  const setTheme = (theme: string | null = null) => {
    if (theme) {
      themeName.value = theme
      localStorage.setItem('theme', theme)
      return
    }

    themeName.value = getPreInstalledTheme()
  }

  onMounted(() => {
    setTheme()
  })

  return {
    themeName,
    setTheme,
  }
}

export default UseTheme
