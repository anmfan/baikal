import axios from 'axios'
import { Settings as LuxonSettings } from 'luxon'
import NextLink from 'next/link'

import { axiosInstanceITCase, formatURL } from '@itcase/common'
import { linkConfig } from '@itcase/ui/components/Link'

import './appearance'

// Set "NextLink" component as global for "@itcase/ui/Link"(by default <a />)
linkConfig.setLinkComponent(NextLink)

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post.Accept = 'application/json'

if (process.env.REST_BASE_URL) {
  const restURL = formatURL(process.env.REST_BASE_URL, 'addProtocol')
  axiosInstanceITCase.defaults.baseURL = restURL
}
axiosInstanceITCase.defaults.headers.common = Object.assign(
  {},
  axios.defaults.headers.common,
)
axiosInstanceITCase.defaults.headers.post = Object.assign(
  {},
  axios.defaults.headers.post,
)

LuxonSettings.defaultLocale = 'ru-RU'

const APP_TYPE = 'web'

export * from './pages'
export { APP_TYPE }
