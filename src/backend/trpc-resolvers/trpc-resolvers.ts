export function helloResolver() {
	return "Hello server Trpc endpoint"
}

export function healthResolver() {
	return {
		msg: "Server is online"
	}
}