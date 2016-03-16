
import SocialMediaChecker from '../src/SocialMediaChecker';


var checker = new SocialMediaChecker();

describe('SocialMedia: Facebook', () => {

    it('returns facebook key for facebook url', () => {
        var result = checker.check('https://www.facebook.com/john');
        expect(result).toEqual('facebook');
    });
});

describe('SocialMedia: Google+', () => {

    it('returns google+ key for google+ url', () => {
        var result = checker.check('https://www.plus.google.com/john');
        expect(result).toEqual('google+');
    });
});

describe('SocialMedia: Instagram', () => {

    it('returns instagram key for facebook url', () => {
        var result = checker.check('https://www.instagram.com/john');
        expect(result).toEqual('instagram');
    });
});

describe('SocialMedia: Linkedin', () => {

    it('returns linkedin key for linkedin url', () => {
        var result = checker.check('https://www.linkedin.com/john');
        expect(result).toEqual('linkedin');
    });
});


it('check if undefuned url returns false', () => {
    	var result = checker.check('https://www.someothersocialsite.com/check');
    	expect(result).toEqual(false);
    })