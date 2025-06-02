import Link from 'next/link'
import { Button } from '@mantine/core'

export default function Home() {
    return (
        <main>
            <Button component={Link} href="/hello">
                Next link button
            </Button>
        </main>
    )
}
