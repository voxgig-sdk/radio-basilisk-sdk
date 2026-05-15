# RadioBasilisk SDK utility: make_context

from core.context import RadioBasiliskContext


def make_context_util(ctxmap, basectx):
    return RadioBasiliskContext(ctxmap, basectx)
