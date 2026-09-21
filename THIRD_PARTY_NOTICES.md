# Third-party data notices

The classic HSK 2.0 vocabulary membership, pinyin, and base English glosses in
`src/vocabulary.ts` were derived from
[`clem109/hsk-vocabulary`](https://github.com/clem109/hsk-vocabulary), which is
provided under the MIT License (copyright Clément Dénarié).

Traditional forms were generated and checked with
[`opencc-js`](https://github.com/nk2028/opencc-js), an Apache-2.0-licensed
JavaScript port of OpenCC. Ambiguous polyphonic entries were retained and
manually aligned by pronunciation and meaning.

Concise learner-facing English glosses were cross-checked against the classic
HSK 2.0 lists published by ABC Chinese. The repository's tests preserve the
150/150/300 per-level counts and assert representative ambiguous forms.
