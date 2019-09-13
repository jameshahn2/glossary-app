import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

const wordsNotToCapitalize = [
    'a',
    'an',
    'and',
    'is',
    'the',
];

export default helper(function titleCase([title]) {
    return title
        .split(/_+/g)
        .map((word, index) => {
            if (index > 0 && wordsNotToCapitalize.includes(word)) {
                return word;
            }

            return capitalize(word);
        })
        .join(' ');
});
