
import SocialMediaChecker from '../src/SocialMediaChecker';

var checker = new SocialMediaChecker();

describe('Facebook', () => {

    it('returns "facebook" for facebook url', () => {
        var result = checker.check('https://www.facebook.com/john');
        expect(result).toEqual('facebook');
    });
});

describe('Google+', () => {

    it('returns google"+" y for google+ url', () => {
        var result = checker.check('https://www.plus.google.com/john');
        expect(result).toEqual('google+');
    });
});

describe('Instagram', () => {

    it('returns "instagram" y for facebook url', () => {
        var result = checker.check('https://www.instagram.com/john');
        expect(result).toEqual('instagram');
    });
});

describe('Linkedin', () => {

    it('returns "linkedin" y for linkedin url', () => {
        var result = checker.check('https://www.linkedin.com/john');
        expect(result).toEqual('linkedin');
    });
});
