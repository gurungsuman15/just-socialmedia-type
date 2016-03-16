
 const patterns = {
    'facebook': '^(https?\:\/\/)?(www\.)?(facebook|fb)\.[a-z]{2,3}(\/.+)+\/?$',
    'instagram': '^(https?\:\/\/)?(www\.)?(instagram)\.[a-z]{2,3}(\/.+)+\/?$',
    'linkedin': '^(https?\:\/\/)?(www\.)?(linkedin)\.[a-z]{2,3}(\/.+)+\/?$',
    'google+': '^(https?\:\/\/)?(www\.)?(plus.google)\.[a-z]{2,3}(\/.+)+\/?$'
};

class SocialMediaChecker {
	static check(url) {
        if (typeof url !== 'string') {
            throw new Error('SocialMediaChecker.check() expects a string value.');
        }

        for (let key in patterns) {
            let regex = new RegExp(patterns[key], 'i');

            if (url.match(regex)) {
                return key;
            }
        }

        return false;
    }
}

export default SocialMediaChecker;
