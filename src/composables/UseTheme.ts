import { onMounted, type Ref, ref, watch } from 'vue'

export default function UseTheme() {
  const themeName: Ref<string> = ref('light')

  const updateThemeColor = (color: string) => {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta')
      themeColorMeta.setAttribute('name', 'theme-color')
      document.head.appendChild(themeColorMeta)
    }
    themeColorMeta.setAttribute('content', color.trim())
  }

  watch(
    () => themeName.value,
    () => {
      if (themeName.value === 'light') {
        document.documentElement.classList.add('theme-light')
        document.documentElement.classList.remove('theme-dark')
      } else {
        document.documentElement.classList.add('theme-dark')
        document.documentElement.classList.remove('theme-light')
      }

      const computedBgMain = getComputedStyle(document.documentElement).getPropertyValue(
        '--bg-main',
      )
      updateThemeColor(computedBgMain)
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
