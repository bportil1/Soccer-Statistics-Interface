import React from 'react';
import dynamic from 'next/dynamic'


const Headline = dynamic(() => import('../common_components/Headline.js'), {ssr:false});
const PgNavBar = dynamic(() => import('../navbar/PgNavBar.js'), {ssr:false})

export const metadata = {
	title: "Soccer Data Interface",
	description: "Visuals for a mock soccer league."
}

export default function RootLayout({children}) {
	return (
		<html>
			<body>
  			<title>Football Way</title>
			<Headline />
			<PgNavBar />
			{children}
			</body>
		</html>
	)
};
