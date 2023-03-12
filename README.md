# sha-ts
SHA256, SHA384, SHA512, hash function for TypeScript

## Install

```bash
npm install --save sha-ts
```

## Usage

```typescript
import { ShaTS }  from 'sha-ts';

const sha256 = ShaTS.sha256('test')
const sha384 = ShaTS.sha384('test')
const sha512 = ShaTS.sha512('test')

console.log(sha256)
// 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
console.log(sha384)
// 768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9
console.log(sha512)
// ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff
```

## License
MIT License 2023 (c) [Takahashi Akari](https://github.com/takahashi-akari)