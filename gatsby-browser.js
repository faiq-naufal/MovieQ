import "./src/utils/reset.min.css"
import "./src/utils/global.css"
import "fontsource-noto-sans"
import "fontsource-ubuntu"
import "fontsource-ubuntu/500.css"
import "fontsource-ubuntu/700.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
