/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Meta from "../components/common/Meta";
import Script from "../components/Script";
import HTMLComment from "../components/ui/HTMLComment";
import { withCacheBuster } from "../utils/cache";

const Layout = ({
	meta,
	url,
	Component
}: {
	meta: any;
	url: URL;
	Component: any;
}) => {
	return (
		<>
			<html
				lang="en-GB"
				dir="ltr"
				class="no-js"
				prefix="og: https://ogp.me/ns#"
				itemScope
				itemType="http://schema.org/WebSite"
			>
				<head>
					<link
						rel="stylesheet"
						href={withCacheBuster(
							"/media/css/scalar.css"
						)}
						type="text/css"
					></link>
					{meta.css &&
						meta.css.map((path: string) => (
							<link
								rel="stylesheet"
								href={withCacheBuster(
									`/media/css/${path}`
								)}
								type="text/css"
							></link>
						))}
					<Meta host={url.host} />
					<title>{meta.title} ― Dot HQ (UK)</title>
					<HTMLComment>
						All our pages should work with JavaScript
						disabled.
						{"\n"}- If you believe this isn't the case,
						please
						{"\n"}- file a bug report at
						https://github.com/dothq/scalar/issues/new
						{"\n"}- and we will ensure this gets resolved.
					</HTMLComment>
					<Script src={"scalar.js"} defer />
					{meta.js &&
						meta.js.map((path: string) => (
							<Script src={path} defer />
						))}
				</head>

				<body>
					<div id="__scalar">
						<Header />

						<main
							class="fdn-main-content"
							id={"main-content"}
							role="main"
						>
							<Component />
						</main>

						<Footer />
					</div>
				</body>
			</html>
		</>
	);
};

export default Layout;
