
import { Context } from './Context'


class RadioBasiliskError extends Error {

  isRadioBasiliskError = true

  sdk = 'RadioBasilisk'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RadioBasiliskError
}

