import { NextPageContext } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-4xl font-bold">
        {statusCode
          ? `${statusCode} - Server Error`
          : 'An error occurred'}
      </h1>
      <p className="mb-8 text-lg">
        {statusCode
          ? 'Sorry, something went wrong on our end.'
          : 'Sorry, an unexpected error has occurred.'}
      </p>
      <Link href="/">
        <Button>
          Return Home
        </Button>
      </Link>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error