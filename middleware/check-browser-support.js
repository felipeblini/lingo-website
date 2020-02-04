const userAgent = ({ $ua, redirect }) => {
  if ($ua.browser() === 'Internet Explorer') {
    return redirect('/not-supported')
  }

  if ($ua.browser() === 'Safari' && $ua.os().includes('Windows')) {
    return redirect('/not-supported')
  }
}

export default userAgent
