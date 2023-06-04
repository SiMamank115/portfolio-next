import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="min-h-screen min-w-screen h-[300vh] overflow-hidden bg-[var(--background-start-rgb)]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
