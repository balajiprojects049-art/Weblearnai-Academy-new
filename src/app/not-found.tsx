import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-primary">404 - Page Not Found</h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="mt-8">
                <Button>Return Home</Button>
            </Link>
        </div>
    )
}
