import React, { cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  ...props
}) => {
  const { asPath } = useRouter()

  const matchExactHref =
    shouldMatchExactHref && (asPath === props.href || asPath === props.as)

  const startsWithHref =
    asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as))

  const isActive = matchExactHref || (!shouldMatchExactHref && startsWithHref)

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}

export { ActiveLink }