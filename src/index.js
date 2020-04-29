import * as socket from "./lib/index";
import { ERRORS, PRE_ATTRIBUTE } from "./constants";
import handleByType from "./handlerByType/index";

function initialize(keaAwsUrl, authEvent, authOptions = []) {
	if (!keaAwsUrl) throw Error(ERRORS.NO_URL);
	const socketI = socket.io(keaAwsUrl);
	socketI.on("connect", function () {
		if (socketI.connected) {
			document.getElementById("status").innerHTML = "Connected & Authorizing";
			socketI.emit(authEvent, ...authOptions);
		}
	});
	socketI.on(authEvent, function () {
		document.querySelector(`[${PRE_ATTRIBUTE}-status]`).innerHTML =
			"Authorized, Waiting for message";
	});
	socketI.on("event", handleByType);
}

export default () => {
	window.kea = initialize;
	return window.kea;
};
