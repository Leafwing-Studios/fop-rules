const plugin = (hook, vm) => {
  var trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 800)
  }
	
  var setColor = ({ background, toggleBtnBg, textColor, highlightColor, divider }) => {
    document.documentElement.style.setProperty(
      '--docsify_dark_mode_bg',
      background
    )
    document.documentElement.style.setProperty(
      '--docsify_dark_mode_btn',
      toggleBtnBg
    )
    document.documentElement.style.setProperty('--text_color', textColor)
		document.documentElement.style.setProperty('--highlight_color', highlightColor)
		document.documentElement.style.setProperty('--divider_color', divider)
  }

  var theme = { dark: {}, light: {} }
  var defaultConfig = {
    dark: {
      background: '#0F151A',
      toggleBtnBg: '#34495e',
			textColor: '#b4b4a8',
			highlightColor: '#c3c3b6',
			divider: '#454555',
    },
    light: {
      background: 'none',
      toggleBtnBg: 'var(--theme-color)',
      textColor: '#34495e',
			highlightColor: '#2c3e50',
			divider: '#eee',
    }
  }

  theme = { ...defaultConfig, ...vm.config.darkMode }

  hook.afterEach(function(html, next) {
    var darkEl = ` <div id="dark_mode">
             <input class="container_toggle" type="checkbox" id="switch" name="mode" />
             <label for="switch">Toggle</label>
           </div>`
    html = `${darkEl}${html}`
    next(html)
  })

  hook.doneEach(function() {
    var currColor
    if (localStorage.getItem('DOCSIFY_DARK_MODE')) {
      currColor = localStorage.getItem('DOCSIFY_DARK_MODE')
      setColor(theme[`${currColor}`])
    } else {
      currColor = 'light'
      setColor(theme.light)
    }

    var checkbox = document.querySelector('input[name=mode]')
    
    if (!checkbox) {
      return
    }

    checkbox.addEventListener('change', function() {
      // dark
      if (currColor === 'light') {
        trans()
        setColor(theme.dark)
        localStorage.setItem('DOCSIFY_DARK_MODE', 'dark')
        currColor = 'dark'
      } else {
        trans()
        setColor(theme.light)
        localStorage.setItem('DOCSIFY_DARK_MODE', 'light')
        currColor = 'light'
      }
    })
  })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
