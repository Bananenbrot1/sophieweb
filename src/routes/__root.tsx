import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const fontHref =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Sophie Mesenich | Hebamme München Schwabing',
      },
      {
        name: 'description',
        content:
          'Hebamme Sophie Mesenich in München Schwabing – Schwangerschafts-, Wochenbett- und Verlustbegleitung.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'stylesheet', href: fontHref },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#FCFBF9] text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-950">
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}
