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
      <link rel="preconnect" href="https://fonts.gstatic.com"/> 
      <link href="https://fonts.googleapis.com/css2?family=Alata&family=Calistoga&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Jost&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

export default Meta