// normalize.css
import 'normalize.css'

// BUGFIX: prevent font awesome icons from flashing
import '@fortawesome/fontawesome-svg-core/styles.css'

// add redux provider
import ReduxProvider from './src/state/reduxProvider'
export const wrapRootElement = ReduxProvider
