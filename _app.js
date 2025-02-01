import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers";
import { siteConfig } from "@/config/site";

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
		{ media: "(prefers-color-scheme: classic)", color: "classic" },
		{ media: "(prefers-color-scheme: minimal)", color: "minimal" },
		{ media: "(prefers-color-scheme: cyber)", color: "cyber" },
	],
};

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Mathematics", "Physics", "Computer Science", "Engineering", "Open-Science", "Theorym"],
	authors: [
		{
			name: "Ralph Razzouk",
			url: "https://ralphrazzouk.com",
		},
	],
	creator: "Ralph Razzouk",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
		{ media: "(prefers-color-scheme: classic)", color: "classic" },
		{ media: "(prefers-color-scheme: minimal)", color: "minimal" },
		{ media: "(prefers-color-scheme: cyber)", color: "cyber" },
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@rlphrazz",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function MyApp({ Component, pageProps }) {
	return (
    <>
      <ThemeProvider
        attribute="class"
        themes={["light", "dark", "classic", "minimal", "cyber"]}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
	);
}