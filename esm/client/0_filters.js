export function match(filter, value) {
    let [type, ...other] = filter.split(":");
    if (type != "" && !(type in value)) {
        return false;
    }
    if (type == "") {
        if (other.length != 1) {
            return false;
        }
        if ("message" in value) {
            type = "message";
        }
        else if ("editedMessage" in value) {
            type = "editedMessage";
        }
        else {
            return false;
        }
    }
    const field = other[0];
    if (field) {
        if (!(field in value[type])) {
            return false;
        }
    }
    return true;
}
