/**
 * @class Err
 * @classdesc The Error Managing module
 * @extends Error
 */
class Err extends Error {
	constructor(message: any) {
		super();
		Error.captureStackTrace(this, this.constructor);
        this.name = 'PteroJS Error';
        this.message = message;
	}
}
export default Err