import Head from 'next/head'
import useSystemTheme from 'react-use-system-theme'

const Meta = ({ title }) => {
  const theme = useSystemTheme() || 'light'

  return(
    <Head>
      <title>{title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon-${theme}.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32-${theme}.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16-${theme}.png`} />
      <link rel="shortcut icon" href={`/favicon-${theme}.ico`} />
    </Head>
  )
}

export default Meta