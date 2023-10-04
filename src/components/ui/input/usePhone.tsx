import { ChangeEvent, useMemo, useState } from 'react';
import parse, {
  CountryCode,
  formatIncompletePhoneNumber,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js';

export type { CountryCode };

export function getCountryFlag(code: CountryCode, aspect = '3x2') {
  return `https://purecatamphetamine.github.io/country-flag-icons/${aspect}/${code}.svg`;
}

const allCountryCodes = getCountries();

export const countries = allCountryCodes
  .map(country => ({
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country)!,
    code: country,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export interface Options {
  initialValue: string;
  allowedCountryCodes: CountryCode[];
}

export function useTelephone(_options?: Partial<Options>) {
  const options: Options = {
    initialValue: '',
    allowedCountryCodes: allCountryCodes,
    ..._options,
  };

  const [country, setCountry] = useState<CountryCode>(
    () =>
      countries.filter(country =>
        options.allowedCountryCodes.includes(country.code)
      )[0].code
  );

  const [input, setInputValue] = useState(options.initialValue);

  const { e164, valid } = useMemo(() => {
    const e164 = parse(input, {
      defaultCountry: country,
      extract: true,
    });

    if (
      e164?.country &&
      options.allowedCountryCodes.includes(e164.country) &&
      e164.isPossible()
    ) {
      setCountry(old => {
        if (old === e164.country) {
          return old;
        }

        return e164.country ?? old;
      });
    }

    return {
      e164,
      valid: e164?.isValid() ?? false,
    };
  }, [input]);

  return {
    country,
    parsed: e164,
    valid,
    value: formatIncompletePhoneNumber(input, country),
    flag: getCountryFlag(country),
    number: e164?.number ?? null,

    onChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    },

    onChangeCountry(country: CountryCode) {
      if (!options.allowedCountryCodes.includes(country)) {
        throw new Error('Country is not allowed!');
      }

      setCountry(country);

      if (e164?.nationalNumber) {
        setInputValue(
          '+' + getCountryCallingCode(country) + e164.nationalNumber
        );
        return;
      }

      setInputValue('+' + getCountryCallingCode(country));
    },
  } as const;
}

export default useTelephone;

// {getVehicleFeatures.data?.map((val, i) => (
//   <label key={val._id} className="inline-flex items-center">
//     <input
//       value={val._id}
//       checked={featuresValue.join(",").includes(val._id)}
//       className="cursor-pointer text-indigo-500 w-5 h-5 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded-md"
//       name="features"
//       type="checkbox"
//       onChange={featuresHandle}
//     />
//     {val.name}
//   </label>
// ))}
// const featuresHandle = (event: any) => {
//   let newArray = [...featuresValue, event.target.value];
//   if (featuresValue.includes(event.target.value)) {
//     newArray = newArray.filter((day) => day !== event.target.value);
//   }
//   setFeaturesValue(newArray);
//   setQuerys({
//     ...querys,
//     features: newArray.join(",").toLowerCase(),
//   });
// };
