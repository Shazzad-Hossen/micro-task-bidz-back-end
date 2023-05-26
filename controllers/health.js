exports.check = async (ctx) => {
	// eslint-disable-next-line no-useless-catch
	try {
		// ctx.response.ok({
		//   status: "ok",
		//   uptime: process.uptime(),
		//   logging: process.env.LOG_LEVEL
		// });

		ctx.status = 200;
		ctx.body = { message: 'Success' };
	} catch (error) {
		throw error;
	}
};
