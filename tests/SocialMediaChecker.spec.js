
import SocialMediaChecker from '../src/SocialMediaChecker';

describe('Facebook', () => {

    it('returns "facebook" for facebook url', () => {
        var result = SocialMediaChecker.check('https://www.facebook.com/john');
        expect(result).toEqual('facebook');
    });
});

describe('Google+', () => {

    it('returns "google+" for google+ url', () => {
        var result = SocialMediaChecker.check('https://www.plus.google.com/john');
        expect(result).toEqual('google+');
    });
});

describe('Instagram', () => {

    it('returns "instagram" for instagram url', () => {
        var result = SocialMediaChecker.check('https://www.instagram.com/john');
        expect(result).toEqual('instagram');
    });
});

describe('Linkedin', () => {

    it('returns "linkedin" for linkedin url', () => {
        var result = SocialMediaChecker.check('https://www.linkedin.com/john');
        expect(result).toEqual('linkedin');
    });
});
