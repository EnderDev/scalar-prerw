/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fastifyFormbody from "@fastify/formbody";
import { fastify } from "fastify";
import { v1 } from "./api/v1";
import { router } from "./router";

export const server = fastify({ logger: {} });

export const createHttpServer = () => {
	server.register(fastifyFormbody);

	server.register(router, { prefix: "/" });
	server.register(v1, { prefix: "/api/v1" });

	server.get("/media/js/env.js", (req, res) => {
		const STRIPE_CLIENT_API_KEY =
			process.env.NODE_ENV == "develop"
				? process.env.STRIPE_TESTING_CLIENT_API_KEY
				: process.env.STRIPE_CLIENT_API_KEY;

		res.header(
			"content-type",
			"application/javascript; charset=UTF-8"
		).send(
			`window.SCALAR_ENV = {
				STRIPE_CLIENT_API_KEY: ${JSON.stringify(STRIPE_CLIENT_API_KEY)},
			}`.trim()
		);
	});

	return server;
};
