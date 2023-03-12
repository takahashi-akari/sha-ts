import { createHash } from 'crypto'

class HashTS {
  private static _instance: HashTS

  /* eslint-disable @typescript-eslint/no-empty-function */
  private constructor() {}

  public static get instance(): HashTS {
    if (!HashTS._instance) {
      HashTS._instance = new HashTS()
    }
    return HashTS._instance
  }

  public sha256 (data: string): string {
    const hash = createHash('sha256')
    hash.update(data)
    return hash.digest('hex')
  }

  public sha384 (data: string): string {
    const hash = createHash('sha384')
    hash.update(data)
    return hash.digest('hex')
  }

  public sha512 (data: string): string {
    const hash = createHash('sha512')
    hash.update(data)
    return hash.digest('hex')
  }
}
const ShaTS = HashTS.instance
export { ShaTS }