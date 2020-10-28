import React from 'react'

const Wrapper = ({className, children}) =>
<div className={className}>
  {children}
</div>

const OnePageTheme = ({welcomeTheme, header, children, wrapStyle, containerStyle, footer, ...props}) =>
<Wrapper className={wrapStyle}>
  <div className={containerStyle}>
    {welcomeTheme}
    {header}
    {children}
    {footer}
  </div>
</Wrapper>

export default OnePageTheme