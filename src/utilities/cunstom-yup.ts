import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.required',
        localeProps: params,
      };
    },
    oneOf(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.oneOf',
        localeProps: params,
      };
    },
    default(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.default',
        localeProps: params,
      };
    },
    defined(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.default',
        localeProps: params,
      };
    },
    notNull(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.notNull',
        localeProps: params,
      };
    },
    notOneOf(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.notOneOf',
        localeProps: params,
      };
    },
    notType(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.mixed.notType',
        localeProps: params,
      };
    },
  },
  string: {
    email(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.email',
        localeProps: params,
      };
    },
    trim(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.trim',
        localeProps: params,
      };
    },
    uppercase(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.uppercase',
        localeProps: params,
      };
    },
    url(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.url',
        localeProps: params,
      };
    },
    uuid(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.uuid',
        localeProps: params,
      };
    },
    datetime(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.datetime',
        localeProps: params,
      };
    },
    datetime_offset(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.datetime_offset',
        localeProps: params,
      };
    },
    datetime_precision(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.datetime_precision',
        localeProps: params,
      };
    },
    lowercase(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.lowercase',
        localeProps: params,
      };
    },
    length(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.length',
        localeProps: params,
      };
    },
    matches(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.matches',
        localeProps: params,
      };
    },
    max(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.max',
        localeProps: params,
      };
    },
    min(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.string.min',
        localeProps: params,
      };
    },
  },
  number: {
    integer(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.integer',
        localeProps: params,
      };
    },
    positive(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.positive',
        localeProps: params,
      };
    },
    lessThan(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.lessThan',
        localeProps: params,
      };
    },
    negative(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.negative',
        localeProps: params,
      };
    },
    max(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.max',
        localeProps: params,
      };
    },
    min(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.min',
        localeProps: params,
      };
    },
    moreThan(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.number.moreThan',
        localeProps: params,
      };
    },
  },
  boolean: {
    isValue(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.boolean.isValue',
        localeProps: params,
      };
    },
  },
  date: {
    max(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.date.max',
        localeProps: params,
      };
    },
    min(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.date.min',
        localeProps: params,
      };
    },
  },
  array: {
    max(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.array.max',
        localeProps: params,
      };
    },
    min(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.array.min',
        localeProps: params,
      };
    },
  },
  object: {
    noUnknown(params) {
      return {
        localeKey: 'inputs.defaultInputValidations.array.min',
        localeProps: params,
      };
    },
  },
});

// TODO: addMethod to Yup when needed
Yup.addMethod(
  Yup.object,
  'rangeMinMax',
  function (localeKey?: string, localeProps?: any) {
    return this.test({
      name: 'test-from-to',
      message: localeKey
        ? { localeKey, localeProps }
        : {
            localeKey: 'inputs.customInputValidations.fromToAmount',
          },
      test(value) {
        if (
          value?.from &&
          value?.to &&
          parseFloat(value.from) > parseFloat(value.to)
        ) {
          return false;
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.object,
  'rangeMinMaxSpread',
  function (
    fromKey: string,
    toKey: string,
    localeKey?: string,
    localeProps?: any,
  ) {
    return this.test({
      name: 'test-from-to-spread',
      message: {
        localeKey: 'inputs.customInputValidations.fromToAmount',
      },
      test() {
        const fromAmount = parseFloat(this.resolve(Yup.ref(fromKey)));
        const toAmount = parseFloat(this.resolve(Yup.ref(toKey)));
        const { createError, path } = this;
        if (fromAmount && toAmount && fromAmount > toAmount) {
          return createError({
            path,
            message: localeKey
              ? { localeKey, localeProps }
              : {
                  localeKey: 'inputs.customInputValidations.fromToAmount',
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'startsWith',
  function (str: string[], localeKey?: string, localeProps?: any) {
    return this.test({
      name: 'test-starts-with',
      message: {
        localeKey: 'inputs.customInputValidations.startsWith',
        localeProps: { str: str.toString() },
      },
      test(value) {
        const { createError, path } = this;
        if (
          value &&
          value?.length > 0 &&
          !str.some(prefix => value.startsWith(prefix))
        ) {
          return createError({
            path,
            message: localeKey
              ? { localeKey, localeProps }
              : {
                  localeKey: 'inputs.customInputValidations.startsWith',
                  localeProps: { str: str.toString() },
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'digitsOnly',
  function (localeKey?: string, localeProps?: any) {
    return this.test({
      name: 'test-digits-only',
      message: {
        localeKey: 'inputs.customInputValidations.digitsOnly',
      },
      test(value) {
        const { createError, path } = this;
        if (value && !value?.match(/^[0-9]+$/)) {
          return createError({
            path,
            message: localeKey
              ? { localeKey, localeProps }
              : {
                  localeKey: 'inputs.customInputValidations.digitsOnly',
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'parseMoreThan',
  function (more: number, localeKey?: string, localeProps?: any) {
    return this.test({
      name: 'test-parse-more',
      message: {
        localeKey: 'inputs.defaultInputValidations.number.moreThan',
        localeProps: { more },
      },
      test(value) {
        const { createError, path } = this;
        if (value && parseFloat(value) > more) {
          return true;
        }
        return createError({
          path,
          message: localeKey
            ? { localeKey, localeProps }
            : {
                localeKey: 'inputs.defaultInputValidations.number.moreThan',
                localeProps: { more },
              },
        });
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'parseLessThan',
  function (less: number, localeKey?: string, localeProps?: any) {
    return this.test({
      name: 'test-parse-less',
      message: {
        localeKey: 'inputs.defaultInputValidations.number.lessThan',
        localeProps: { less },
      },
      test(value) {
        const { createError, path } = this;
        if (value && parseFloat(value) < less) {
          return true;
        }
        return createError({
          path,
          message: localeKey
            ? { localeKey, localeProps }
            : {
                localeKey: 'inputs.defaultInputValidations.number.lessThan',
                localeProps: { less },
              },
        });
      },
    });
  },
);

export default Yup;
