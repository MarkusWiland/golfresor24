'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function DynamicBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const isLast = index === segments.length - 1
    const label = decodeURIComponent(
      segment.charAt(0).toUpperCase() + segment.slice(1),
    )

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <BreadcrumbPage className="text-[hsl(var(--primary))] font-semibold">
            {label}
          </BreadcrumbPage>
        ) : (
          <BreadcrumbLink
            href={href}
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            {label}
          </BreadcrumbLink>
        )}
        {!isLast && (
          <BreadcrumbSeparator className="text-[hsl(var(--muted-foreground))]" />
        )}
      </BreadcrumbItem>
    )
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Hem
          </BreadcrumbLink>
          {segments.length > 0 && (
            <BreadcrumbSeparator className="text-[hsl(var(--muted-foreground))]" />
          )}
        </BreadcrumbItem>
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
