import { PRE_ATTRIBUTE, GLOBAL_TAG_TYPE, TYPE_OF_MESSAGES } from "../constants"

/**
 * 
 * @param { tag } identifier for message div, for example element with attribute
 * @param { tagId } identifier for if this exact id is the message for
 * @param { type } there are two, just notify or block
 * @param { text } what do I show
 * @param { status } QUEUED | PROCESSING | COMPLETED
 *  
 * For example <div kea-global="abc" ></div> will be chosed with message { tag: "global", tagId: "abc" }
 */
const handleByType = ({tag = GLOBAL_TAG_TYPE, tagId, type = TYPE_OF_MESSAGES.NOTIFY, text, status}) => {
	const element = document.querySelector(`${PRE_ATTRIBUTE}-${tag}`);
	element.innerHTML = text;
}

export default handleByType;