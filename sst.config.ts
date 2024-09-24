import { SSTConfig } from "sst";
import { API } from "./stacks/Api";

export default {
	config(_input) {
		return {
			name: "sst-python-base",
			region: "us-east-1",
		};
	},
	stacks(app) {
		app.setDefaultFunctionProps({
			runtime: "python3.11",
			copyFiles: [{ from: "packages/functions/core", to: "core" }],
			python: {
				noDocker: true, // SST has a bug building Python3.12 with Docker at time of writing
			},
		});

		app.stack(API);
	},
} satisfies SSTConfig;
