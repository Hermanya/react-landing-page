module.exports = ({
  html = '',
  css = '',
  scripts,
  publicPath,
  title = 'x0',
  meta = [],
  links = []
}) =>
  `<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
<meta name='generator' content='Compositor x0'>
<title>Landing Page with React</title>
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}</style>
<meta name='description' content='React UI component library for building Landing Pages'>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:site' content='@hermanhasawish'>
<meta name='twitter:title' content='react-landing-page'>
<meta name='twitter:description' content='React UI component library for building Landing Pages'>
<meta name='twitter:image' content='https://source.unsplash.com/jxaj-UrzQbc/1024x512'>
${css}
</head>
<div id=root>${html}</div>
${scripts}
<script>
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
// ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');
</script>
`
