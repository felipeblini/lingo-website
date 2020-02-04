const bs = ({ $ua, redirect }) => {
  if ($ua.browser() === 'Internet Explorer') {
    return redirect('/not-supported')
  }

  if ($ua.browser() === 'Safari' && $ua.os().includes('Windows')) {
    return redirect('/not-supported')
  }

  console.log({ browser: $ua.browser(), os: $ua.os() })
}

export default bs
